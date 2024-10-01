"use client";
import React, { useState } from 'react'
import img1 from '../../assets/img/tshirt/front.png'
import img2 from '../../assets/img/tshirt/back.jpg'
import img3 from '../../assets/img/tshirt/chart.jpeg'
import Image from 'next/image';
import copy from '../../assets/img/copy.svg';
import { createClient } from '@supabase/supabase-js';
import { QRCodeSVG } from 'qrcode.react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [img1, img2, img3]
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




const Tshirt = () => {
    const [index, setIndex] = React.useState(0)
    const [popUp, setPopUp] = React.useState(false)
    const [payment, setPayment] = React.useState(false)
    const [amount, setAmount] = React.useState(369)
    const [status, setStatus] = React.useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [size, setSize] = useState('');
    const [error, setError] = useState('');
    const [fileName, setFileName] = useState('');
    const [referral, setReferral] = useState('');
    const [comment, setComment] = useState('');
    const [upiUrl, setUpiUrl] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [cusatian, setCusatian] = useState(false);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_API_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const UPI = 'tedxcusat@sbi';

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
        if (!name || !email || !phone || !address || !size || !quantity || !amount) {
            setError('All fields are required');
            return;
        }
        setError('');
        setPayment(true);
        setUpiUrl(`upi://pay?pa=${UPI}&pn=TEDxCUSAT&am=${amount}&cu=INR&tn=Payment for Tshirt`);
    };

    const handlePayment = () => {
        if (window.innerWidth >= 768) {
            setError('This feature is not available on desktop. Please try on mobile');
        }
        // const receiverUPI = 'tedxcusat@sbi';
        const note = 'Payment for Tshirt';
        const name = 'TEDxCUSAT';

        // const upiUrl = `upi://pay?pa=${receiverUPI}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
        setUpiUrl(`upi://pay?pa=${UPI}&pn=TEDxCUSAT&am=${amount}&cu=INR&tn=Payment for Tshirt`);

        window.location.href = upiUrl;
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(UPI);
        setStatus('UPI copied to clipboard');
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

        const filePath = `uploads/${email}/${file.name}`;
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
                    referral: referral ? referral : null,
                    quantity: quantity,
                    cusatian,
                    amount
                },
            ]);

        if (insertError) {
            console.error('Error inserting data:', insertError);
            setStatus('Error placing order');
        } else {
            setStatus('Order placed successfully');
            setPopUp(false);
            setPayment(false);
            window.location.href = '/merchandise/success';            
        }
    };


    const handleReferral = (e) => {
        setReferral(e.target.value);
        if (referralCode.includes(e.target.value)) {
            setAmount(Math.round(369 * 0.9 * quantity));
            setComment(' HURRAY! 10% DISCOUNT APPLIED');
        } else {
            setAmount(Math.round(369 * quantity));
            setComment('');
        }
    }


    React.useEffect(() => {
        if (referralCode.includes(referral)) {
            setAmount(Math.round(369 * 0.9 * quantity));
            setComment(' HURRAY! 10% DISCOUNT APPLIED');
        } else {
            setAmount(Math.round(369 * quantity));
            setComment('');
        }
    }, [quantity])


    return (
        <div className='p-custom my-10 flex flex-col md:flex-row md:gap-5  font-sans'>
            <div className='grid grid-cols-3 gap-4 flex-1'>
                <div className=' col-span-3 border-black border-2 rounded-15 overflow-hidden h-full'>
                    <Carousel showArrows={true} showStatus={true} showThumbs={true} showIndicators={true} selectedItem={index} onChange={setIndex} infiniteLoop={true} className=' col-span-3 -mb-10'>
                        <Image src={images[0]} alt='meme' className='w-full h-full object-cover hover:scale-105 transition-all duration-100' />
                        <Image src={images[1]} alt='meme' className='w-full h-full object-cover hover:scale-105 transition-all duration-100' />
                        <Image src={images[2]} alt='meme' className='w-full h-full object-cover hover:scale-105 transition-all duration-100' />
                    </Carousel>
                </div>
                {images.map((img, i) => (
                    <div key={i} onClick={() => setIndex(i)} className='cursor-pointer col-span-1 h-full flex '>
                        <Image src={img} alt='meme' className={`h-full object-cover w-full ${index === i ? 'border-red-500 border-2' : 'border-black'} border rounded-15`} />
                    </div>
                ))
                }
            </div>
            <div className='flex-1 p-4'>
                <p className='font-bold text-2xl md:text-3xl capitalize'>Buy <span className='text-tedRed'>TED<sup>x</sup></span>CUSAT exclusive merchantise Tshirt</p>
                <p className='text-base md:text-lg mt-1 md:mt-2'><span className='font-bold'>Item Specifications</span></p>
                <p className='text-base md:text-lg mt-1 md:mt-2'>Size: <span className='font-bold'>XS, S, M, L, XL ,XXL</span></p>
                <p className='text-base md:text-lg mt-1 md:mt-2'>Color: <span className='font-bold'>Black</span></p>
                <p className='text-base md:text-lg mt-1 md:mt-2'>Price: <span className='font-bold'>₹ 369</span></p>
                {/* <p className='text-base md:text-lg md:text-lg mt-1 md:mt-2'>Material: <span className='font-bold'>Cotton</span></p> */}
                <button className='bg-tedRed text-white px-6 py-3 mt-4 rounded-md bg-opacity-30 cursor-not-allowed'>Closed</button>
            </div>
            {popUp &&
                <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-start pb-5 md:pb-0 pt-2 md:items-start justify-center z-[999] overflow-y-auto'>
                    <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50' onClick={() => setPopUp(false)}></div>
                    <div className='bg-white p-5 pt-8 md:pt-14 rounded-md relative flex flex-col md:flex-wrap w-[90%] md:w-1/2 gap-2'>
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
                                <p className='text-base md:text-lg'>Contact</p>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 md:mt-2'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Email'
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 md:mt-2'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Phone'
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 md:mt-2'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <p className='text-base md:text-lg mt-1 md:mt-2'>Are you cusatian</p>
                                <select
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 md:mt-2'
                                    onChange={(e) => setCusatian(e.target.value)}
                                >
                                    <option value={false}>No</option>
                                    <option value={true}>Yes</option>
                                </select>
                                <p className='text-base md:text-lg mt-1 md:mt-2'>Address</p>
                                <input
                                    type='text'
                                    placeholder='Address'
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 md:mt-2'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <p className='text-base md:text-lg mt-1 md:mt-2'>Size</p>
                                <select
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 md:mt-2'
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                >
                                    <option value=''>Select size</option>
                                    <option value='XS'>XS</option>
                                    <option value='S'>S</option>
                                    <option value='M'>M</option>
                                    <option value='L'>L</option>
                                    <option value='XL'>XL</option>
                                    <option value='XXL'>XXL</option>
                                </select>
                                <p className='text-base md:text-lg mt-1 md:mt-2'>Quantity</p>
                                <input
                                    type='number'
                                    placeholder='Quantity'
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 md:mt-2'
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                                <p className='text-base md:text-lg mt-1 md:mt-2'>Referral code</p>
                                <input
                                    type='text'
                                    placeholder='Referral code if any..'
                                    className='w-full max-w-xl border border-gray-300 rounded-md p-2 md:mt-2'
                                    onChange={handleReferral}
                                />
                                <p className='text-base md:text-lg mt-1 md:mt-2'>Price: <span className='font-bold'>₹ {amount}</span></p>
                                <p className='text-base md:text-lg mt-1 md:mt-2'>{comment}</p>
                                {error && <p className='text-red-500 mt-1 md:mt-2'>{error}</p>}

                                <button
                                    className='bg-tedRed text-white px-6 py-3 mt-4 rounded-md'
                                    onClick={handleForm}
                                >
                                    Proceed to Payment
                                </button>
                            </>
                        ) : (
                            <>
                                <p className='text-lg md:text-xl font-bold'>Please note: Upload the payment details after making the payment</p>
                                <div className='border-2 w-full flex flex-col p-3 border-black rounded-lg'>
                                    <button className='bg-tedRed text-white px-6 py-3 mt-4 rounded-md' onClick={handlePayment}>Pay ₹ {amount} using upi</button>
                                    <p className='text-base md:text-lg mt-1 md:mt-2 text-center'>OR</p>
                                    <p className='text-base md:text-lg mt-1 md:mt-2 text-center'>Scan the QR code to pay</p>
                                    <div className='mx-auto'>
                                        <QRCodeSVG value={upiUrl} size={128} />
                                    </div>
                                    <p className="text-base md:text-lg mt-2 md:mt-3 font-bold text-tedRed">In case of any issues with the payment process, please try sending your payment directly to this UPI ID.</p>
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
                                <button className='bg-tedRed text-white px-6 py-3 mt-4 rounded-md' onClick={handleUpload}>Complete your purchase</button>
                            </>
                        )}
                    </div>
                </div>
            }
            {status && (
                <div className='fixed z-[999] bottom-10 bg-tedRed text-white p-4 rounded-lg left-[50%] -translate-x-[50%] w-3/5 border-black border'>
                    <p className=' text-xl md:text-3xl font-bold text-center'>
                        {status}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Tshirt