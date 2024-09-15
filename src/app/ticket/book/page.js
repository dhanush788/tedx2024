"use client";


import "@/components/utils/resizable.css";
import { useEffect, useState } from "react";
import { InputBox, FoodPref } from "@/components/utils/InputComponents";
import { supabase } from "@/utils/supabaseClient";
import Header from "@/components/Headers/Header";
import Footer from "@/components/Footer/Footer";

const Page = () => {
  const [isCusatian, setIsCusatian] = useState(false); // initially false
  const [successMessage, setSuccessMessage] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const type = window.location.href.match(/(?<=type\=)[a-z]+/);
      setIsCusatian(type && type[0] === "cusatian");
    }
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCusatianChange = (checked) => {
    setIsCusatian(checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const contact = formData.get('contact');
    const foodPreference = formData.get('pref'); //confusing for now due to inpucomponet 
    const registrationFee = isCusatian ? 800 : 1000;

    let imageUrl = null;

    if (image) {
      const { data, error: uploadError } = await supabase.storage
        .from('ticket-id') //bucket name
        .upload(`public/${Date.now()}_${image.name}`, image);

      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        setSuccessMessage("Error uploading image. Please try again.");
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('ticket-id')
        .getPublicUrl(data.path);

      imageUrl = publicUrl;
    }

    const { error: insertError } = await supabase.from('participants').insert([ //table name
      {
        name,
        email,
        contact: contact,
        food_preference: foodPreference,
        is_cusatian: isCusatian,
        registration_fee: registrationFee,
        image_url: imageUrl
      },
    ]);

    if (insertError) {
      console.error("Error submitting form:", insertError);
      setSuccessMessage("Error submitting form. Please try again.");
    } else {
      console.log("registered successfully");
      setSuccessMessage("Successfully registered!");
      form.reset();
      setImage(null);

      setTimeout(() => {
        history.back();
      }, 2000);
    }
  };

  const goBack = (evt) => {
    evt.preventDefault();
    history.back();
  };

  return (
    <>
      <Header />
      <div className="p-custom max-w-8xl font-sans font-semibold">
        {/* <Image src={TicketImg} alt="Ticket" /> */}
        {/* <Image src={TEDxLogo} width={300} className="mt-4" alt="TEDx Logo" /> */}
        <p className="text-4xl uppercase mt-3">Participant Information</p>
        <p className="text-gray-500 text-sm font-medium">
          Make sure you fill all the necessary details carefully; once completed, no changes can be applied.
        </p>
        <form className="mt-10 mb-14" onSubmit={handleSubmit}>
          <div className="md:grid items-end md:grid-cols-2 text-black">
            <InputBox name="name" placeholder="Enter your name" />
            <InputBox name="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="md:grid items-end md:grid-cols-2">
            <InputBox name="contact" type="tel" placeholder="Enter your contact number" />
            <FoodPref name="foodPreference" />
          </div>
          <div className="md:grid items-end md:grid-cols-2">
            <InputBox name="registration Fee" disabled={true} value={isCusatian ? "₹800" : "₹1000"} />
            {/* <CheckBox name="cusatian" checked={isCusatian} onchange={handleCusatianChange} /> */}
            {
              isCusatian && (
                // <div className="flex items-center gap-2">
                //   <input type="checkbox" name="cusatian" id="cusatian" checked={isCusatian} onChange={handleCusatianChange} />
                //   <label htmlFor="cusatian">CUSAT Student</label>
                // </div>
                <div className="w-full max-w-xl mt-2 ml-5">
                  <p className="text-md uppercase mb-3">Upload your CUSAT id card</p>
                  <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    className="hidden"
                    required
                  />
                  <label
                    htmlFor="fileInput"
                    className="w-full block border border-black rounded-md p-2 text-center bg-white cursor-pointer hover:bg-[#f0f4ff] focus:ring-2 focus:ring-[#394095] transition duration-200 ease-in-out shadow-sm"
                  >
                    {image ? image.name : 'Upload Your CUSAT id card'}
                  </label>
                </div>
              )
            }
          </div>
          {/* <div className="w-full max-w-xl mt-2">
            <p className="text-md uppercase">Upload your payment screenshot</p>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              className="hidden"
              onChange={handleImageChange}
              required
            />
            <label
              htmlFor="fileInput"
              className="w-full block border border-black rounded-md p-2 text-center bg-white cursor-pointer hover:bg-[#f0f4ff] focus:ring-2 focus:ring-[#394095] transition duration-200 ease-in-out shadow-sm"
            >
              {image ? image.name : 'Upload Your Payment Screenshot'}
            </label>
          </div> */}

          <div className="font-sans gap-3 flex w-[100%] justify-center mt-8">
            {
              paymentDone ? (
                <button type="submit" className="border border-black py-1 px-5 rounded-md bg-tedRed text-white">
                  Register
                </button>) : (
                <button className="border border-black py-1 px-5 rounded-md bg-tedRed text-white" onClick={() => setPaymentDone(true)}>
                  Proceed to Payment
                </button>
              )
            }

            <button className="border border-black py-1 px-5 rounded-md" onClick={goBack}>
              Cancel
            </button>
          </div>
        </form>
        {successMessage && (
          <p className="text-green-500 text-lg font-bold text-center">{successMessage}</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Page;
