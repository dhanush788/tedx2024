"use client"
import { useState } from 'react';
import Header from '@/components/Headers/Header';
import Footer from '@/components/Footer/Footer';
import { FoodPref, InputBox } from '@/components/utils/InputComponents';
import { supabase } from '@/utils/supabaseClient';

const Page = () => {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    address: '',
    contact: '',
    foodPreference: 'veg'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { data, error: insertError } = await supabase
      .from('Infopark')
      .insert([formData]);

    if (insertError) {
      console.error('Error inserting data:', insertError);
      setStatus('Error in submitting the form');
    } else {
      window.location.href = '/waitlist/success';
    }
  };

  return (
    <>
      <div className='bg-white'>
        <Header />
      </div>
      <hr className='border-t border-black' />
      <div className='our-journey p-custom font-bold md:my-10 my-4 '>
        <p className="text-3xl md:text-4xl uppercase mt-3">Participant Information</p>
        <p className="text-gray-500 text-sm font-medium">
          Make sure you fill all the necessary details carefully. Once completed, no changes can be applied.
        </p>
      </div>
      <form className="md:my-10 my-4 p-custom font-bold" onSubmit={handleSubmit}>
        <div className="md:grid items-end md:grid-cols-2 text-black md:gap-8">
          <InputBox
            name="name"
            displayName="Full Name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <InputBox
            name="email"
            displayName="Office Email"
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
        <div className="md:grid items-end md:grid-cols-2 text-black md:gap-8">
          <InputBox
            name="companyName"
            displayName="company Name"
            value={formData.companyName}
            placeholder="Enter your company name"
            onChange={handleChange}
          />
          <InputBox
            name="address"
            displayName="company Address"
            value={formData.address}
            placeholder="Enter your company address"
            onChange={handleChange}
          />
        </div>
        <div className="font-sans gap-3 flex w-[100%] justify-center mt-8">
          <button type="submit" className="py-3 px-5 rounded-md bg-tedRed text-white hover:scale-105 duration-500">
            Join the Waitlist
          </button>
          <button type="button" className="border border-black py-1 px-5 rounded-md hover:scale-105 duration-500">
            Cancel
          </button>
        </div>
      </form>
      <hr className='border-t border-black' />
      <Footer />
    </>
  );
}

export default Page;
