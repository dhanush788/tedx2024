import React from 'react'
import close from '../../assets/img/close.svg'
import Image from 'next/image'

const Alert = ({ open, handleClose }) => {
    return (
        open && (
            <>
                <div className='fixed bg-black opacity-40 w-full h-full top-0 z-[100]'></div>
                <div className="fixed bottom-3 left-[50%] -translate-x-[50%] md:-translate-x-5 md:bottom-10 md:right-10 z-[100] w-[90vw] md:w-1/2  font-avenue">
                    <div className="flex flex-col-reverse md:flex-row bg-[#E5E5E5] border-2 border-black rounded-xl md:rounded-2xl overflow-hidden">
                        <div className='flex flex-col my-auto flex-1 relative justify-center items-center px-8 pr-14 md:pr-20 py-10' >
                            <Image src={close} alt='close' className='absolute top-3 md:top-5 right-3 md:right-5 cursor-pointer' onClick={handleClose} />
                            <div className='w-full flex flex-col gap-3 relative'>
                                <p className=' text-xl md:text-3xl capitalize text-tedRed font-bold'>Buy our merchantise now!</p>
                                <p className='font-normal text-sm md:text-lg opacity-80'>Pre-book our exclusive merchandise now</p>
                                <a href='/merchandise' className='button-hover border border-black px-8 py-3 text-sm md:text-xl rounded-lg cursor-pointer mr-auto mt-1 bg-tedRed text-white'>
                                    Buy Now
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    )
}

export default Alert
