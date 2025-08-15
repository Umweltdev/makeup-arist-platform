import { Navbar } from "@/components/index"
import { useState } from "react"
import {servicesData} from "../../utils/helpers" // mock data or fetch from API
import {format} from "date-fns/format"
import type { Service } from "@/types/service.type"
import { useNavigate } from "react-router-dom"

interface ServiceGridProps {
  title: string
  services: Service[]
}
interface ServiceGridProps {
  title: string
  services: Service[]
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ title, services }) => {
  const [showAll, setShowAll] = useState(false)
  //const [selectedService, setSelectedService] = useState<Service | null>(null)

  const visibleServices = showAll ? services : services.slice(0, 4)
  const navigate= useNavigate()

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow cursor-pointer overflow-hidden hover:shadow-lg transition"
            onClick={() => navigate(`/services/${service.category}/${service.title}`)}
          >
            <img
              src={service.images[0]}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
              <p className="text-green-600 font-medium mb-1">${service.price}</p>
              <p className="text-sm text-gray-500">
                Next: {format(new Date(service.nextAvailable), "dd/MM/yyyy HH:mm")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {services.length > 4 && (
        <div className="text-center mt-6">
          <button
            className="text-green-600 font-semibold hover:underline cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

     
    </section>
  )
}




const ServicesPage: React.FC = ()=>{
    
  const singleServices: Service[] = servicesData.filter(
    (s) => s.category === "single"
  )
  const classServices: Service[] = servicesData.filter(
    (s: Service) => s.category === "class"
  )
  const eventServices: Service[] = servicesData.filter(
    (s: Service) => s.category === "event"
  )
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-white pt-20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-8 text-center">Services</h1>

                    {/* <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">
                            Bridal Makeup
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Bridal Makeup
                                    </h3>
                                    <p className="text-gray-600">
                                        Starting at $350
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        90 min
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                Includes consultation, trial, and day-of makeup.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">
                            Special Occasion
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Special Occasion Makeup
                                    </h3>
                                    <p className="text-gray-600">$150</p>
                                    <p className="text-gray-500 text-sm">
                                        60 min
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                Makeup for events, parties, or photoshoots.
                            </p>
                        </div>
                    </section> */}
                    <ServiceGrid title="Single Services" services={singleServices} />
                <ServiceGrid title="Class Services" services={classServices} />
                <ServiceGrid title="Event Services" services={eventServices} />
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
