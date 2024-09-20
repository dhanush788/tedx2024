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
    foodPreference: 'veg',
    designation: '',
    location: ''
  });

  const location = [
    "Thapasya",
    "Vismaya",
    "Athulya",
    "Athulya Annexe",
    "Lulu Cyber Tower 1",
    "Lulu Cyber Tower 2",
    "World Trade Centre Tower 1",
    "World Trade Centre Tower 2",
    "TCS Campus",
    "Wipro Campus",
    "IBS Campus",
    "Carnival Phase 1",
    "Carnival Phase 2",
    "Carnival Phase 3",
    "Carnival Phase 4",
    "Jyothirmaya",
    "Claysys Campus",
    "Cognizant Campus",
    "Trans Asia Cyber Park",
    "Cloudscapes",
    "Infopark Thrissur",
    "Infopark Cherthala"
  ]


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
        <div className='md:grid items-end md:grid-cols-2 md:gap-8'>
          <InputBox
            name="designation"
            displayName="Designation"
            value={formData.designation}
            placeholder="Enter your designation"
            onChange={handleChange}
          />
          <div className="py-3">
            <label className="text-md uppercase">Building</label><br />
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="bg-transparent border-b border-b-gray-700 p-2 w-[100%] cursor-pointer"
              required
            >
              <option value="">Select your building</option>
              {location.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
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
