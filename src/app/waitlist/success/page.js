import Footer from '@/components/Footer/Footer'
import Header from '@/components/Headers/Header'
import Tshirt from '@/components/Tshirt/Tshirt'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header />
      <div className='p-[8%]'>
        <p className='text-tedRed !font-thunder font-bold text-center text-3xl md:text-5xl mb-2 md:mb-5'>
          Your ticket request has been received
        </p>
        <p className='text-base md:text-xl'>Thank you for your interest in attending <span className='font-bold'><span className='text-tedRed'>TED<sup>x</sup></span>CUSAT24</span>. We have successfully received your ticket request. Our team will review your application as part of our allocation process, which ensures diverse representation from various organizations.<br /></p>
        <p className='text-base md:text-xl'>Please note that your ticket is not yet confirmed. We will process requests on a rolling basis, and you will receive an email with further details within 3-5 business days.</p>
        <p className='text-base md:text-xl'>If you have any questions in the meantime, feel free to contact us at [email address].</p>
        <p className='text-base md:text-xl'>We appreciate your patience and look forward to potentially welcoming you to TEDxCUSAT24.</p>

        <p className='text-sm md:text-lg mt-5 md:mt-10'>
          To stay updated with all our latest news, upcoming events, and special offers, make sure to visit our Linktree. We’ve got a range of exciting links and information just for you!
          &nbsp;
          <a href='https://linktr.ee/tedxcusat' className='underline font-bold'>https://linktr.ee/tedxcusat</a>
        </p>
        <p className='text-sm md:text-lg'>
          We appreciate your enthusiasm and participation. Don’t forget to check out more exciting events
          and offers coming your way. Feel free to contact us if you have any questions or need further
          assistance.
        </p>
        <p className='text-sm md:text-lg'>
          Email: <a href='mailto:outreach@tedxcusat.in' className='underline font-bold'>outreach@tedxcusat.in</a>
        </p>
      </div>
      <hr className='w-full top-1/2 bg-black -z-10 h-px border-0 md:mt-5' />
      <Footer />
    </div>
  )
}

export default Page