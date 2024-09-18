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

const referralCode = [
  "ABH1S2K",
  "AKSHR3A",
  "AKH1L5D",
  "AKSH4Y7",
  "ALAK5ND",
  "ALI6A8D",
  "ANJ2A3D",
  "ASW4IN7",
  "ELD5H0K",
  "DH4L1Y2",
  "JEE2V4A",
  "JEN7F9R",
  "JUD3E5A",
  "MAR8UL9",
  "MAY8KH5",
  "MID9HN7",
  "RAN4A8D",
  "REM5Y3A",
  "RIYAF5T",
  "RIY4L6M",
  "RIY3UM7",
  "SAF9A1D",
  "SAN2E7A",
  "SRE5L8K",
  "SUK9TH6",
  "TAN8Y3A",
  "RAHULP73",
  "FATHZA86",
  "NIVEKM52",
  "SAGNI34",
  "MOHAS45",
  "MUHNN67",
  "ARAMN89",
  "AHANMR12",
  "AJAYED93",
  "SAISN21",
  "MUDIC56",
  "MOMOK23",
  "AKARAB78",
  "YOOSI19",
  "ALLEVP34",
  "KASPB41",
  "JEOJK88",
  "NIHALP53",
  "ALFAAJ47",
  "NAVES69",
  "FEBTP98",
  "ARUNIK26",
  "ADIKKS35",
  "BHAGTP62",
  "MADORI73",
  "THACC54",
  "ALEPH95",
  "RISHP22",
  "AMAKR81",
  "AISWV32",
  "SANSN17",
  "LEEM59",
  "AMAZH64",
  "LENEEM82",
  "AFHGZ25",
  "MALAH18",
  "ALESBO90",
  "JISNP43",
  "NITKR32",
  "ABHKVV11",
  "MIDHR76",
  "ADTN74",
  "MITHM28",
  "YASEEN50",
  "DANABD79",
  "SANALV33",
  "MOHFU39",
  "DEVM42",
  "AYSHAF70",
  "AADTR57",
  "MIHRAK65",
  "YUGSUB77",
  "CHRB59",
  "ARAPU13",
  "MURBS91",
  "FAHHS23",
  "SREEVR29",
  "AJIKK88",
  "HAFSU84",
  "ADHSNT95",
  "ASKRP66",
  "MUHNDE38",
  "ANSPL40",
  "SREEKM44",
  "VISPRD94",
  "MUSHNK41",
  "AKARUN75",
  "ABHRJV97",
  "MALVP36",
  "PAVPP49",
  "NEESB92",
  "DECR67",
  "ALNV40",
  "MOHANE61",
  "ASINF72",
  "UMAKK42",
  "SRAMMP34",
  "SWATHI30",
  "PASKKK29",
  "ALEN99",
  "NOESHI64",
  "BICKR53",
  "MUSHP70",
  "LAYVM11",
  "ALPBJU93",
  "NIVEVM18",
  "BHGAOK14",
  "VANDNS81",
  "SONSUE47",
  "VISPK32",
  "SAMREN68",
  "IVAKAN95",
  "ABHKK76",
  "LUTHAK91",
  "DRAKAS64",
  "MOHAFM23",
  "AYSRI52",
  "SANJSH83",
  "ADRJK42",
  "NAJDM22",
  "NABDLA39",
  "SANIPR17",
  "ABHSKE15",
  "MOTHPP61",
  "ROUVT69",
  "MURP25",
  "NATHZH51",
  "KAVSB42",
  "SRGOP59",
  "TESMK89",
  "ADDVB92",
  "AISNSH30",
  "PRAP67",
  "MADNM24",
  "KAIFA83",
  "MISHK21",
  "MOHRN45",
  "JOHZU67",
  "VRUCN14",
  "NANTS96",
  "AADHS27",
  "AAROA48",
  "MYSNS53",
  "SRUTS32",
  "MARSJ85",
  "SHAKR58",
  "SRIKS73",
  "JOEJO29",
  "CHRJES64"
]

const Page = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);
  const [isCusatian, setIsCusatian] = useState(false);
  const [image, setImage] = useState(null);
  const [amount, setAmount] = useState(1000);
  const [error, setError] = useState(null);
  const [upiUrl, setUpiUrl] = useState(null);
  const [fileName, setFileName] = useState('Upload the payment screenshot.');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    foodPreference: 'veg',
    registration_fee: amount,
    imageUrl: '',
    cusatImageUrl: '',
    referral: '',
  });

  const UPI = "tedxcusat@sbi";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const type = window.location.href.match(/(?<=type\=)[a-z]+/);
      const cusatianType = type && type[0];
      setIsCusatian((type && type[0] === "cusatian") || (type && type[0] === "earlycusatian"));
      if (cusatianType === "cusatian") {
        setIsCusatian(true);
        setAmount(700);
      } else if (cusatianType === "earlycusatian") {
        setIsCusatian(true);
        setAmount(600);
      } else if (cusatianType === "earlyregular") {
        setIsCusatian(false);
        setAmount(800);
      } else {
        setIsCusatian(false);
        setAmount(900);
      }

      setFormData((prevData) => ({
        ...prevData,
        registration_fee: amount,
      }));
    }
  }, []);

  useEffect(() => {
    if (formData.referral && !referralCode.includes(formData.referral)) {
      setError('Invalid referral code.');
    } else {
      setError('');
      setAmount(amount - 100);
    }
    
  }, [formData.referral]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrlCusat = null;
    let imageUrl = null;

    if (isCusatian && !image) {
      setError('Please upload your CUSAT id card.');
      return;
    }

    if (fileName === 'Upload the payment screenshot.') {
      setError('Please upload the payment screenshot.');
      return;
    }

    if (!formData.name || !formData.email || !formData.contact) {
      setError('Please fill all the details.');
      return;
    }

    if (image) {
      const { data, error: uploadError } = await supabase.storage
        .from('ticket-id')
        .upload(`public/${formData.name}/cusatid_${image.name}`, image);

      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        setSuccessMessage("Error uploading image. Please try again.");
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('ticket-id')
        .getPublicUrl(data.path);

      setFormData((prevData) => ({
        ...prevData,
        cusatImageUrl: publicUrl,
      }));
    }

    if (fileName !== 'Upload the payment screenshot.') {
      const { data, error: uploadError } = await supabase.storage
        .from('ticket-id')
        .upload(`public/${formData.name}/payment_${image.name}`, image);

      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        setSuccessMessage("Error uploading image. Please try again.");
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('ticket-id')
        .getPublicUrl(data.path);

      setFormData((prevData) => ({
        ...prevData,
        imageUrl: publicUrl,
      }));
      }

    const { error: insertError } = await supabase.from('participants').insert([formData]);

    if (insertError) {
      console.error("Error submitting form:", insertError);
      setSuccessMessage("Error submitting form. Please try again.");
    } else {
      console.log("Registered successfully");
      setSuccessMessage("Successfully registered!");
      window.location.href = '/ticket/success';

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
      setError('This feature is not available on desktop. Please try on mobile.');
      return;
    }
    const upiUrl = `upi://pay?pa=${UPI}&pn=TEDxCUSAT&am=${amount}&cu=INR&tn=Payment for Ticket`;
    window.location.href = upiUrl;
  }

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setError('');
    } else {
      setFileName('Upload the payment screenshot.');
      setError('Please upload the payment screenshot.');
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
        <form className="md:my-10 my-4" onSubmit={paymentDone ? handleSubmit : handleForm}>
          {paymentDone ? (
            <div className="max-w-3xl">
              <p className='text-lg md:text-xl font-bold'>Please note: Upload the payment details after making the payment</p>
              <div className='border w-full flex flex-col p-3 border-black rounded-lg'>
                <button className='bg-tedRed text-white px-6 py-3 mt-4 rounded-md' onClick={handlePayment}>Pay ₹ {amount} using UPI</button>
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
                  {fileName}
                </label>
              </div>
              {error && <p className='text-red-500 mt-1 md:mt-2'>{error}</p>}
            </div>
          ) : (
            <>
              <div className="md:grid items-end md:grid-cols-2 text-black md:gap-8">
                <InputBox
                  name="name"
                  displayName="Name"
                  value={formData.name}
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
                <InputBox
                  name="email"
                  displayName="Email"
                  type="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div className="md:grid items-end md:grid-cols-2 md:gap-8">
                <InputBox
                  name="contact"
                  displayName="Contact"
                  type="tel"
                  value={formData.contact}
                  placeholder="Enter your contact number"
                  onChange={handleChange}
                />
                <FoodPref
                  name="foodPreference"
                  displayName="Food Preference"
                  value={formData.foodPreference}
                  onChange={handleChange}
                />
              </div>
              <div className="md:grid items-end md:grid-cols-2 md:gap-8">
                <InputBox
                  name="referral"
                  displayName="Referral Code"
                  value={formData.referral}
                  placeholder="Enter referral code"
                  onChange={handleChange}
                />
              </div>
              <div className="md:grid items-end md:grid-cols-2 md:gap-8">
                <InputBox
                  name="registrationFee"
                  displayName="Registration Fee"
                  disabled={true}
                  value={amount}
                />
                {isCusatian && (
                  <div className="w-full max-w-xl ">
                    <p className="text-md uppercase mb-3">Upload your CUSAT id card</p>
                    <input
                      name="cusatId"
                      type="file"
                      accept="image/*"
                      id="fileInput"
                      className="hidden"
                      required={isCusatian}
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <label
                      htmlFor="fileInput"
                      className="w-full block border border-black rounded-md p-2 text-center bg-white cursor-pointer hover:bg-[#f0f4ff] focus:ring-2 focus:ring-[#394095] transition duration-200 ease-in-out shadow-sm"
                    >
                      {image ? image.name : 'Upload Your CUSAT ID card'}
                    </label>
                  </div>
                )}
              </div>
            </>
          )}

          <div className="font-sans gap-3 flex w-[100%] justify-center mt-8">
            {paymentDone ? (
              <button
                onClick={handleSubmit}
                className="border border-black py-1 px-5 rounded-md bg-tedRed text-white">
                Register
              </button>
            ) : (
              <button type="submit" className="border border-black py-1 px-5 rounded-md bg-tedRed text-white">
                Proceed to Payment
              </button>
            )}
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
