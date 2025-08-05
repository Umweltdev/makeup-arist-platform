import { useState } from "react"
import { Camera } from "lucide-react"
import { Button } from "@/components/index"

const Services = () => {
    const [activeTab, setActiveTab] = useState("bridal")

    return (
        <section className="py-16 bg-gray-50 mt-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Services & Pricing</h2>
                <div className="mb-8">
                    <div className="flex space-x-8 border-b">
                        <button
                            onClick={() => setActiveTab("bridal")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "bridal" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                        >
                            Bridal
                        </button>
                        <button
                            onClick={() => setActiveTab("special")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "special" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                        >
                            Special Occasion
                        </button>
                        <button
                            onClick={() => setActiveTab("editorial")}
                            className={`pb-4 font-semibold cursor-pointer ${activeTab === "editorial" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                        >
                            Editorial
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            {activeTab === "bridal" && "Bridal Makeup Package"}
                            {activeTab === "special" &&
                                "Special Occasion Makeup"}
                            {activeTab === "editorial" &&
                                "Editorial & Photoshoot Makeup"}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {activeTab === "bridal" &&
                                "Includes consultation, trial session, and on-site makeup application on your wedding day. Customized to complement your dress and theme."}
                            {activeTab === "special" &&
                                "Perfect for proms, galas, and other special events. Choose from a range of styles, from soft and romantic to bold and dramatic."}
                            {activeTab === "editorial" &&
                                "Makeup for professional photoshoots, fashion editorials, and creative projects. Collaborating with photographers and stylists to achieve the desired aesthetic."}
                        </p>
                        <Button
                            variant="secondary"
                            className="text-green-500 hover:underline"
                        >
                            View Details
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                            <Camera size={60} className="text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
