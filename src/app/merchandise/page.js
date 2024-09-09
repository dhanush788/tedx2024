import Footer from '@/components/Footer/Footer'
import Header from '@/components/Headers/Header'
import Tshirt from '@/components/Tshirt/Tshirt'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Header />
        <Tshirt />
        <hr className='w-full top-1/2 bg-black -z-10 h-px border-0 md:mt-5' />
        <Footer />
    </div>
  )
}

export default Page