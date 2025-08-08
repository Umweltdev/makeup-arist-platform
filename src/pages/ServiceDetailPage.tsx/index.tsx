import { useParams } from "react-router-dom"
import { servicesData } from "@/utils/helpers"
import { Helmet } from "react-helmet"
import { format } from "date-fns"
import { Camera } from "lucide-react"
import {Navbar} from "@/components/index"

const ServiceDetailPage = () => {
    const { slug } = useParams()

    const service = servicesData.find(
        //(s) => s.id === slug
        (s) => s.title === slug
    )


    if (!service) return <div className="p-6">Service not found</div>

    return (
        <div>
            <Navbar/>
             <div className="max-w-4xl mx-auto py-12 px-4 mt-10">
            <Helmet>
                <title>{`${service.title} | Makeup Services`}</title>
                <meta name="description" content={service.description} />
                <link rel="canonical" href={`https://yourdomain.com/services/${service.category}/${slug}`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": service.title,
                        "description": service.description,
                        "provider": {
                            "@type": "Organization",
                            "name": "Your Business Name"
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": service.price,
                            "priceCurrency": "USD"
                        }
                    })}
                </script>
            </Helmet>
            
            <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
                {service.images.map((_src, i) => (
                    // <img key={i} src={src} alt={service.title} className="rounded w-full h-48 object-cover" />
                    <div
                                    key={i}
                                    className="bg-gray-200 rounded w-full h-48 flex items-center justify-center"
                                >
                                    <Camera
                                        size={40}
                                        className="text-gray-400"
                                    />
                                </div>
                ))}
            </div>

            <p className="text-gray-700 mb-4">{service.description}</p>
            <p><strong>Duration:</strong> {service.duration}</p>
            <p><strong>Price:</strong> ${service.price}</p>
            <p>
                <strong>Next Availability:</strong>{" "}
                {format(new Date(service.nextAvailable), "dd/MM/yyyy HH:mm")}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 text-sm rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 cursor-pointer">
                Book Now
            </button>
        </div>

        </div>
       
    )
}

export default ServiceDetailPage
