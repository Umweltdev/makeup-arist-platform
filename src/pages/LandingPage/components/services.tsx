import { useState } from "react"
import { Button } from "@/components/index"
import { useNavigate } from "react-router-dom"
import {servicesData} from "@/utils/helpers" // mock data or fetch from API

const Services = () => {
    const [activeTab, setActiveTab] = useState("classes")
    const navigate= useNavigate()

    return (
        <section className="py-16 bg-gray-50 mt-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Services & Pricing</h2>
                <div className="mb-8">
                    <div className="flex space-x-8 border-b">
                        <button
                            onClick={() => setActiveTab("classes")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "classes" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                        >
                            Classes
                        </button>
                        <button
                            onClick={() => setActiveTab("events")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "events" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                        >
                            Events
                        </button>
                       
                    </div>
                </div>

                {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
            {activeTab === "classes" && (
                <>
                {servicesData.filter((service)=>service.category==="class").slice(0,2).map((s, index)=>(
                    <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
                        <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                        <p className="text-gray-600 mb-2">{s.description}</p>
                        <p className="text-gray-800 font-semibold mb-4">Price: {s.price}</p>
                        <Button variant="secondary" onClick={()=>navigate(`/services/${s.category}/${s.title}`)}>View Details</Button>
                    </div>
                    // <div className="bg-white p-6 rounded-lg shadow-md">
                    //     <h3 className="text-xl font-semibold mb-2">One-on-One Coaching</h3>
                    //     <p className="text-gray-600 mb-2">Personalized lessons tailored to your skill level and makeup goals.</p>
                    //     <p className="text-gray-800 font-semibold mb-4">Price: $200</p>
                    //     <Button variant="secondary" onClick={()=>navigate("/services")}>View Details</Button>
                    // </div>
                    ))}
                </>
            )}

            {activeTab === "events" && (
                <>
                {servicesData.filter((service)=>service.category==="event").slice(0,2).map((s, index)=>(
                    <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
                        <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                        <p className="text-gray-600 mb-2">{s.description}</p>
                        <p className="text-gray-800 font-semibold mb-4">Price: {s.price}</p>
                        <Button variant="secondary" onClick={()=>navigate(`/services/${s.category}/${s.title}`)}>View Details</Button>
                    </div>
                    // <div className="bg-white p-6 rounded-lg shadow-md">
                    //     <h3 className="text-xl font-semibold mb-2">Corporate Event Makeup</h3>
                    //     <p className="text-gray-600 mb-2">Polished and camera-ready looks for business functions and speaking engagements.</p>
                    //     <p className="text-gray-800 font-semibold mb-4">Price: $130</p>
                    //     <Button variant="secondary" onClick={()=>navigate("/services")}>View Details</Button>
                    // </div>
                    ))}
                </>
            )}
        </div>
            </div>
        </section>
    )
}

export default Services
