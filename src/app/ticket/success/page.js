import Footer from '@/components/Footer/Footer'
import Header from '@/components/Headers/Header'
import Tshirt from '@/components/Tshirt/Tshirt'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header />
      <div className='p-[8%]'>
        <p className='text-tedRed !font-thunder font-bold text-center text-3xl md:text-5xl'>
          Your ticket has been booked successfully
        </p>
        <p className='text-base md:text-xl md:pt-5'>
          You've successfully booked your ticket for <span className='font-bold'><span className='text-tedRed'>TED<sup>x</sup></span>CUSAT24</span> You will receive an email with the details of your booking 2 to 3 days before the event. If you have any questions or need further assistance, feel free to contact us at <a href='mailto:outreach@tedxcusat.in' className='underline font-bold'>outreach@tedxcusat.in</a>
          <br />
        </p>
        <p className='text-sm md:text-lg pt-5 md:pt-8'>
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