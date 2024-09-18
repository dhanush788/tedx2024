"use client";


import "@/components/utils/resizable.css";
import { useEffect, useState } from "react";
import { InputBox, FoodPref } from "@/components/utils/InputComponents";
import { supabase } from "@/utils/supabaseClient";
import Header from "@/components/Headers/Header";
import Footer from "@/components/Footer/Footer";
import copy from '../../../assets/img/copy.svg';
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

const Page = () => {
  const [isCusatian, setIsCusatian] = useState(false); // initially false
  const [successMessage, setSuccessMessage] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);
  const [image, setImage] = useState(null);
  const [amount, setAmount] = useState(1000);
  const [error, setError] = useState(null);
  const [upiUrl, setUpiUrl] = useState(null);
  const [fileName, setFileName] = useState('');

  const UPI = "tedxcusat@sbi";

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

  const handleForm = async (e) => {
    e.preventDefault();
    setPaymentDone(true);
    setUpiUrl(`upi://pay?pa=${UPI}&pn=TEDxCUSAT&am=${amount}&cu=INR&tn=Payment for Ticket`);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(UPI);
  }

  const handlePayment = () => {
    if (window.innerWidth >= 768) {
      setError('This feature is not available on desktop. Please try on mobile');
    }
    const receiverUPI = 'tedxcusat@sbi';
    const note = 'Payment for Ticket';
    const name = 'TEDxCUSAT';

    const upiUrl = `upi://pay?pa=${receiverUPI}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

    window.location.href = upiUrl;
  }

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setError('');
    } else {
      setFileName('Upload Image');
      setError('Please upload the payment screenshot');
    }
  };

  return (
    <>
      <div className="bg-white">
        <Header />
      </div>
      <div className="p-custom max-w-8xl font-sans font-semibold border-y border-black !py-8 md:!py-12">
        <p className="text-3xl md:text-4xl uppercase mt-3">{paymentDone ? "Payment Information" : "Participant Information"}</p>
        <p className="text-gray-500 text-sm font-medium">
          Make sure you fill all the necessary details carefully; once completed, no changes can be applied.
        </p>
        <form className="md:my-10 my-4" onSubmit={handleForm}>
          {paymentDone ? (
            <div className="max-w-3xl">
              <p className='text-lg md:text-xl font-bold'>Please note: Upload the payment details after making the payment</p>
              <div className='border w-full flex flex-col p-3 border-black rounded-lg'>
                <button className='bg-tedRed text-white px-6 py-3 mt-4 rounded-md' onClick={handlePayment}>Pay ₹ {amount} using upi</button>
                <p className='text-base md:text-lg mt-1 md:mt-2 text-center'>OR</p>
                <p className='text-base md:text-lg mt-1 md:mt-2 text-center'>Scan the QR code to pay</p>
                <div className='mx-auto'>
                  <QRCodeSVG value={upiUrl} size={128} />
                </div>
                <div className='flex items-center'>
                  <p className='text-base md:text-lg mt-1 md:mt-2'>UPI: <span className='font-bold'>{UPI}</span></p>
                  <Image src={copy} alt='copy' className='w-4 h-4 inline-block ml-2 cursor-pointer' onClick={handleCopy} />
                </div>
              </div>
              <div className="w-full max-w-xl mt-1 md:mt-2">
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="fileInput"
                  className="w-full block border border-black rounded-md p-2 text-center bg-white cursor-pointer hover:bg-[#f0f4ff] focus:ring-2 focus:ring-[#394095] transition duration-200 ease-in-out shadow-sm"
                >
                  {fileName ? fileName : 'Upload Your Payment Screenshot'}
                </label>
              </div>
              {error && <p className='text-red-500 mt-1 md:mt-2'>{error}</p>}
            </div>
          ) : (
            <>
              <div className="md:grid items-end md:grid-cols-2 text-black md:gap-8">
                <InputBox name="name" placeholder="Enter your name" />
                <InputBox name="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="md:grid items-end md:grid-cols-2 md:gap-8">
                <InputBox name="contact" type="tel" placeholder="Enter your contact number" />
                <FoodPref name="foodPreference" />
              </div>
              <div className="md:grid items-end md:grid-cols-2 md:gap-8">
                <InputBox name="registration Fee" disabled={true} value={isCusatian ? "₹800" : "₹1000"} />
                {
                  isCusatian && (
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
            </>
          )}

          <div className="font-sans gap-3 flex w-[100%] justify-center mt-8">
            {
              paymentDone ? (
                <button
                  onClick={handleSubmit}
                  className="border border-black py-1 px-5 rounded-md bg-tedRed text-white">
                  Register
                </button>) : (
                <button type="submit" className="border border-black py-1 px-5 rounded-md bg-tedRed text-white">
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
