import { Camera } from "lucide-react"
import { Button } from "@/components/index"
import { useState } from "react"

const Portfolio = ({
    setActivePage,
    
}: {
    setActivePage: React.Dispatch<React.SetStateAction<string>>
    
}) => {
    const [activeTab, setActiveTab] = useState("class")
    return (
        <section className="py-16 bg-[#3F6C54] pt-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-white">Portfolio</h2>
                <div className="flex space-x-8 border-b border-white">
                  <button
                            onClick={() => setActiveTab("class")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "class" ? "text-[#CCB2A2] border-b-2 border-[#CCB2A2]" : "text-white"}`}
                        >
                            Classes
                        </button>
                        <button
                            onClick={() => setActiveTab("single")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "single" ? "text-[#CCB2A2] border-b-2 border-[#CCB2A2]" : "text-white"}`}
                        >
                            Single
                        </button>
                       
                        <button
                            onClick={() => setActiveTab("events")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "events" ? "text-[#CCB2A2] border-b-2 border-[#CCB2A2]" : "text-white"}`}
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
                    variant="secondary"
                    onClick={() => setActivePage("Porfolio")}
                >
                    View full Portfolio
                </Button>
            </div>
        </section>
    )
}

export default Portfolio
