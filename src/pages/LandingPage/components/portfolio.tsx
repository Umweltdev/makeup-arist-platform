import { Camera } from "lucide-react"
import { Button } from "@/components/index"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Portfolio = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("all")
    return (
        <section className="py-16 bg-white mt-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
                <div className="flex space-x-8 border-b">
                  <button
                            onClick={() => setActiveTab("all")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "all" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                        >
                            Classes
                        </button>
                        <button
                            onClick={() => setActiveTab("single")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "single" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                        >
                            Single
                        </button>
                       
                        <button
                            onClick={() => setActiveTab("events")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "events" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                        >
                            Events
                        </button>
                       
                    </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center"
                        >
                            <Camera size={40} className="text-gray-400" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <Button
                    variant="primary"
                    onClick={() => navigate("/portfolio")}
                >
                    View full Portfolio
                </Button>
            </div>
        </section>
    )
}

export default Portfolio
