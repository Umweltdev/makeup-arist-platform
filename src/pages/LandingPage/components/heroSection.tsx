import { useState } from "react"
import { Button } from "@/components/index"

import {BookingModal, CheckoutModal} from "@/components/index"

const HeroSection=()=>{
    const [bookingModal, setBookingModal] = useState<boolean>(false);
    const [checkoutModal, setCheckoutModal] = useState<boolean>(false);
    return(
      
        <section className="relative h-screen flex items-center justify-center bg-gray-900 ">
          {bookingModal &&(
            <BookingModal onClose={()=>setBookingModal(false)} setOpenCheckout={()=>{setBookingModal(false); setCheckoutModal(true)}}/>
          )}
          {checkoutModal &&(
            <CheckoutModal onClose={()=>setCheckoutModal(false)}/>
          )}
          
        <div className="absolute  inset-0 bg-gradient-to-r from-black/60 to-black/40 " />
        <div className="relative z-10 text-center text-white px-4  mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 md:mt-10 ">
            Elevate Your Beauty with Expert Makeup Artistry
          </h1>
          <p className="text-xl mb-8  mx-auto px-16">
            Transform your look with professional makeup services tailored to your unique style and occasion. 
            Book your appointment today and experience the art of beauty.
          </p>
          <Button
           variant="primary"
            onClick={() => setBookingModal(true)}
            
          >
            Book Now
          </Button>
        </div>
      </section>
    )
   
}

export default HeroSection