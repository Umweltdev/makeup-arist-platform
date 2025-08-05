import { Camera } from "lucide-react"

const Portfolio = () => {
    return (
        <section className="py-16 bg-white mt-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
        </section>
    )
}

export default Portfolio
