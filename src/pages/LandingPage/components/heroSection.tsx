import { useState } from "react"
import { Button } from "@/components/index"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {BookingModal, CheckoutModal} from "@/components/index"
//import Image1 from "@/assets/images/image1.jpg"
import Image2 from "@/assets/images/image2.jpg"
//import Image3 from "@/assets/images/image3.jpg"
import Image4 from "@/assets/images/image4.jpg"
import Image5 from "@/assets/images/image5.jpg"
import Image6 from "@/assets/images/image6.jpg"

const images = [
    //Image1,
    Image2,
    //Image3,
    Image4,
    Image5,
    Image6

    // Add up to 5 images
]
const HeroSection=()=>{
    const [bookingModal, setBookingModal] = useState<boolean>(false);
    const [checkoutModal, setCheckoutModal] = useState<boolean>(false);
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        pauseOnHover: true,

    }

    return(
      
        <section className="relative  md:h-full  mt-16">
          {/* h-screen flex items-center justify-center bg-gray-90 */}
          {bookingModal &&(
            <BookingModal onClose={()=>setBookingModal(false)} setOpenCheckout={()=>{setBookingModal(false); setCheckoutModal(true)}}/>
          )}
          {checkoutModal &&(
            <CheckoutModal onClose={()=>setCheckoutModal(false)}/>
          )}
        
          <div className=" overflow-hidden w-full bg-[#3F6C54]" >
            {/* sm:h-[400px] */}
                <Slider {...sliderSettings} className="md:h-screen h-[60vh]">
                    {images.map((src, index) => (
                        <div key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                // width={1200}
                                // height={400}
                                className="w-full h-[100%]  md:h-screen object-cover object-center" 
                            />
                            
                        </div>
                    ))}
                </Slider>
            </div>
        {/* <div className="absolute md:h-screen  inset-0 bg-gradient-to-r from-black/60 to-black/40 " /> */}
        <div className="bg-[#f8f4f2]  bottom-10 z-10 text-center text-[#3F6C54] px-4  mx-auto pb-10">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-6 pt-10 ">
            Elevate Your Beauty with Expert Makeup Artistry
          </h1>
          <p className="text-base sm:text-xl mb-8  mx-auto px-16">
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