"use client";

import Image from "next/image";
import TicketImg from "@/assets/img/ticket.png";
import TEDxLogo from "@/assets/img/logo-black.svg";
import "@/components/utils/resizable.css";
import { useState } from "react";
import Copyright from "@/components/Copyright/Copyright";
import { CheckBox, InputBox, FoodPref } from "@/components/utils/InputComponents";
import { supabase } from "@/utils/supabaseClient";

const Page = () => {
  const type = window.location.href.match(/(?<=type\=)[a-z]+/);
  const [isCusatian, setIsCusatian] = useState(type === "cusatian");

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
    const foodPreference = document.querySelector('select[name="pref"]').value; // Get value from the select element
    const registrationFee = isCusatian ? 800 : 1000;

    const { error } = await supabase.from('tedx_ticket_data').insert([
      {
        name: name,
        email: email,
        contact_number: contact,
        food_pref: foodPreference,
        cusatian: isCusatian,
        registration_fee: registrationFee,
      },
    ]);

    if (error) {
      console.error("Error submitting form:", error);
    } else {
      console.log("Form submitted successfully!");
    }
  };

  const goBack = (evt) => {
    evt.preventDefault();
    history.back();
  };

  return (
    <div className="p-custom max-w-8xl font-[montserrat] font-semibold">
      <Image src={TicketImg} alt="Ticket" />
      <Image src={TEDxLogo} width={100} className="mt-4" alt="TEDx Logo" />
      <p className="text-4xl uppercase mt-3">Participant Information</p>
      <p className="text-gray-500 text-sm font-medium">
        Make sure you fill all the necessary details carefully; once completed, no changes can be applied.
      </p>
      <form className="mt-10 mb-14" onSubmit={handleSubmit}>
        <div className="md:grid items-end md:grid-cols-2">
          <InputBox name="name" placeholder="Enter your name" />
          <InputBox name="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="md:grid items-end md:grid-cols-2">
          <InputBox name="contact" type="tel" placeholder="Enter your contact number" />
          <FoodPref name="foodPreference" />
        </div>
        <div className="md:grid items-end md:grid-cols-2">
          <InputBox name="registrationFee" disabled={true} value={isCusatian ? "₹800" : "₹1000"} />
          <CheckBox name="cusatian" checked={isCusatian} onchange={handleCusatianChange} />
        </div>

        <div className="font-avenue gap-3 flex w-[100%] justify-center mt-8">
          <button type="submit" className="border border-black py-1 px-5 rounded-md bg-tedRed text-white">
            Register
          </button>
          <button className="border border-black py-1 px-5 rounded-md" onClick={goBack}>
            Cancel
          </button>
        </div>
      </form>
      <Copyright />
    </div>
  );
};

export default Page;
