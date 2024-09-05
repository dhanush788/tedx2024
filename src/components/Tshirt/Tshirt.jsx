"use client";
import React, { useState } from 'react'
import img1 from '../../assets/img/tshirt/1.jpeg'
import img2 from '../../assets/img/tshirt/2.jpeg'
import Image from 'next/image';
import copy from '../../assets/img/copy.svg';
import { createClient } from '@supabase/supabase-js';

const images = [img1, img2, img2]


const Tshirt = () => {
    const [index, setIndex] = React.useState(0)
    const [popUp, setPopUp] = React.useState(false)
    const [payment, setPayment] = React.useState(false)
    const [amount, setAmount] = React.useState(500)
    const [status, setStatus] = React.useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [size, setSize] = useState('');
    const [error, setError] = useState('');
    const [fileName, setFileName] = useState('');

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_API_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const UPI = 'dhanushpk50@okhdfcbank';

    React.useEffect(() => {
        if (popUp) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [popUp])

    React.useEffect(() => {
        if (status) {
            setTimeout(() => {
                setStatus('')
            }, 3000)
        }
    }, [status])

    const handleForm = () => {
        if (!name || !email || !phone || !address || !size) {
            setError('All fields are required');
            return;
        }
        setError('');
        setPayment(true);
    };

    const handlePayment = () => {
        if (window.innerWidth >= 768) {
            setError('This feature is not available on desktop. Please try on mobile');
        }
        const receiverUPI = 'dhanushpk50@okhdfcbank';
        const note = 'Payment for Tshirt';
        const name = 'TEDxCUSAT';

        const upiUrl = `upi://pay?pa=${receiverUPI}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

        window.location.href = upiUrl;
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(UPI);
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

    const handleUpload = async () => {
        if (!fileName) {
            setError('Please upload the payment screenshot');
            return;
        }

        setError('');

        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (!file) {
            setError('No file selected');
            return;
        }

        const filePath = `uploads/${file.name}`;
        console.log(filePath);
        const { error: uploadError } = await supabase.storage
            .from('payment-id')
            .upload(filePath, file);

        if (uploadError) {
            console.error('Error uploading file:', uploadError);
            setStatus('Error uploading file');
            return;
        }

        const { data: publicUrlData, error: publicUrlError } = await supabase.storage
            .from('payment-id')
            .getPublicUrl(filePath);


        if (publicUrlError) {
            console.error('Error getting public URL:', publicUrlError);
            setStatus('Error retrieving file URL');
            return;
        }

        const fileUrl = publicUrlData.publicUrl;

        const { data, error: insertError } = await supabase
            .from('merchandise')
            .insert([
                {
                    name,
                    email,
                    phone,
                    address,
                    size,
                    file_name: fileUrl,
                },
            ]);

        if (insertError) {
            console.error('Error inserting data:', insertError);
            setStatus('Error placing order');
        } else {
            setStatus('Order placed successfully');
            setPopUp(false);
        }
    };


    return (
        <div className='p-custom my-10 flex flex-col md:flex-row gap-5'>
            <div className='grid grid-cols-3 gap-4 flex-1'>
                <div className='col-span-3 border-black border-2 rounded-15 overflow-hidden'>
                    <Image src={images[index]} alt='meme' className='w-full h-auto hover:scale-105 transition-all duration-100' />
                </div>
                {images.map((img, i) => (
                    <div key={i} onClick={() => setIndex(i)} className='cursor-pointer col-span-1 '>
                        <Image src={img} alt='meme' className='h-auto w-full border-black border rounded-15' />
                    </div>
                ))
                }
            </div>
            <div className='flex-1 p-4'>
                <p className='font-bold text-2xl md:text-3xl font-mono'>Buy <span className='text-tedRed'>TEDx</span>CUSAT exclusive merchantise </p>
                <p className='text-lg md:text-lg mt-2'>Price: <span className='font-bold'>₹ {amount}</span></p>
                <p className='text-lg md:text-lg mt-2'>Size: <span className='font-bold'>S, M, L, XL</span></p>
                <p className='text-lg md:text-lg mt-2'>Color: <span className='font-bold'>White</span></p>
                <p className='text-lg md:text-lg mt-2'>Material: <span className='font-bold'>Cotton</span></p>
                <button className='bg-tedRed text-white px-6 py-3 mt-4 rounded-md' onClick={() => setPopUp(true)}>Buy Now</button>
            </div>
            {popUp &&
                <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center z-[999]'>
                    <div className='absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50' onClick={() => setPopUp(false)}></div>
                    <div className='bg-white p-5 pt-14 rounded-md relative flex flex-col md:flex-wrap w-[90%] md:w-1/2 gap-2'>
                        <svg
                            className="absolute top-5 right-5 cursor-pointer"
                            onClick={() => setPopUp(false)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        {!payment ? (
                            <>
                                <p className='text-lg'>Contact</p>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 mt-2'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Email'
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 mt-2'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Phone'
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 mt-2'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <p className='text-lg mt-2'>Address</p>
                                <input
                                    type='text'
                                    placeholder='Address'
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 mt-2'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <p className='text-lg mt-2'>Size</p>
                                <select
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 mt-2'
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                >
                                    <option value=''>Select size</option>
                                    <option value='S'>S</option>
                                    <option value='M'>M</option>
                                    <option value='L'>L</option>
                                    <option value='XL'>XL</option>
                                </select>

                                {error && <p className='text-red-500 mt-2'>{error}</p>}

                                <button
                                    className='bg-tedRed text-white px-6 py-3 mt-4 rounded-md'
                                    onClick={handleForm}
                                >
                                    Proceed to Payment
                                </button>
                            </>
                        ) : (
                            <>
                                <button className='bg-tedRed text-white px-6 py-3 mt-4 rounded-md' onClick={handlePayment}>Pay ₹ {amount} using upi</button>
                                <p className='text-lg mt-2 text-center'>OR</p>
                                <p className='text-lg mt-2 text-center'>Scan the QR code to pay</p>
                                <Image src={img1} alt='meme' className='w-40 h-40 mx-auto mt-2' />
                                <div className='flex items-center'>
                                    <p className='text-lg mt-2'>UPI: <span className='font-bold'>{UPI}</span></p>
                                    <Image src={copy} alt='copy' className='w-4 h-4 inline-block ml-2 cursor-pointer' onClick={handleCopy} />
                                </div>
                                <div className="w-full max-w-xl mt-2">
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
                                {error && <p className='text-red-500 mt-2'>{error}</p>}
                                <button className='bg-tedRed text-white px-6 py-3 mt-4 rounded-md' onClick={handleUpload}>Complete your purchase</button>
                            </>
                        )}
                    </div>
                </div>
            }
            {status && (
                <div className='fixed z-10 bottom-10 bg-white p-4 rounded-lg left-[50%] -translate-x-[50%] w-3/5 border-black border'>
                    <p className=' text-xl md:text-3xl font-bold text-center'>
                        {status}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Tshirt