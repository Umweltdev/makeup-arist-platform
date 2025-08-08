import { useState } from "react"
import { Button } from "@/components/index"
import { useNavigate } from "react-router-dom"

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
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Makeup Masterclass</h3>
                        <p className="text-gray-600 mb-2">Learn professional techniques for flawless application, contouring, and eye looks.</p>
                        <p className="text-gray-800 font-semibold mb-4">Price: $120</p>
                        <Button variant="secondary" onClick={()=>navigate("/services")}>View Details</Button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">One-on-One Coaching</h3>
                        <p className="text-gray-600 mb-2">Personalized lessons tailored to your skill level and makeup goals.</p>
                        <p className="text-gray-800 font-semibold mb-4">Price: $200</p>
                        <Button variant="secondary" onClick={()=>navigate("/services")}>View Details</Button>
                    </div>
                </>
            )}

            {activeTab === "events" && (
                <>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Event Glam Package</h3>
                        <p className="text-gray-600 mb-2">Ideal for birthdays, parties, and red carpet events. Bold or natural glam options available.</p>
                        <p className="text-gray-800 font-semibold mb-4">Price: $150</p>
                        <Button variant="secondary" onClick={()=>navigate("/services")}>View Details</Button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Corporate Event Makeup</h3>
                        <p className="text-gray-600 mb-2">Polished and camera-ready looks for business functions and speaking engagements.</p>
                        <p className="text-gray-800 font-semibold mb-4">Price: $130</p>
                        <Button variant="secondary" onClick={()=>navigate("/services")}>View Details</Button>
                    </div>
                </>
            )}
        </div>
            </div>
        </section>
    )
}

export default Services
