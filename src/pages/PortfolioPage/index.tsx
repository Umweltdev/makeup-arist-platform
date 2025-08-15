import { useState } from "react"
import { Camera, X } from "lucide-react"
import { Navbar } from "@/components/index"

const PortfolioPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const portfolioImages = [
        { id: 1, category: "Single" },
        { id: 2, category: "Class" },
        { id: 3, category: "Class" },
        { id: 4, category: "Single" },
        { id: 5, category: "Class" },
        { id: 6, category: "Class" },
        { id: 7, category: "Events" },
        { id: 8, category: "Events" },
    ]
    const [activePortfolioCategory, setActivePortfolioCategory] =
        useState("All")

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-white pt-20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-center mb-8">
                        <h1 className="text-4xl font-bold">Portfolio</h1>
                    </div>

                    <div className="flex space-x-6 mb-8">
                        {["All", "Single", "Class", "Events"].map(
                            (category) => (
                                <button
                                    key={category}
                                    onClick={() =>
                                        setActivePortfolioCategory(category)
                                    }
                                    className={`text-lg font-medium pb-2 cursor-pointer ${
                                        activePortfolioCategory === category
                                            ? "text-green-500 border-b-2 border-green-500"
                                            : "text-gray-600 hover:text-gray-800"
                                    }`}
                                >
                                    {category}
                                </button>
                            )
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {portfolioImages
                            .filter(
                                (img) =>
                                    activePortfolioCategory === "All" ||
                                    img.category === activePortfolioCategory
                            )
                            .map((image) => (
                                <div
                                    key={image.id}
                                    className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center"
                                    onClick={() =>
                                        //setSelectedImage(image.fullSizeUrl)
                                        setSelectedImage("new")
                                    }
                                >
                                    <Camera
                                        size={40}
                                        className="text-gray-400"
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close"
                    >
                        <X size={28} />
                    </button>
                    <Camera
                        size={40}
                        //className="text-gray-400"
                        className="max-w-full max-h-[90vh] object-contain rounded shadow-lg"
                    />
                    {/* <img
                        src={selectedImage}
                        alt="Portfolio"
                        className="max-w-full max-h-[90vh] object-contain rounded shadow-lg"
                    /> */}
                </div>
            )}
        </div>
    )
}

export default PortfolioPage
