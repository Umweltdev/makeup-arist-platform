import { Camera } from "lucide-react"

const FeaturedLooks = () => {
    return (
        <section className="py-16 bg-white mt-12">
            <div className="max-w-7xl mx-auto ">
                <h2 className="text-3xl font-bold mb-8">Featured Looks</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-gray-200 rounded-lg aspect-square mb-4 flex items-center justify-center">
                            <Camera size={60} className="text-gray-400" />
                        </div>
                        <h3 className="mt-4 font-semibold">
                            Glamorous Evening Look
                        </h3>
                        <p className="">This shows the brief description</p> 
                        <p className="text-sm">$400</p> 
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-200 rounded-lg aspect-square mb-4 flex items-center justify-center">
                            <Camera size={60} className="text-gray-400" />
                        </div>
                        <h3 className="mt-4 font-semibold">Natural Day Look</h3>
                         <p className="">This shows the brief description</p> 
                         <p className="text-sm">$400</p> 
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-200 rounded-lg aspect-square mb-4 flex items-center justify-center">
                            <Camera size={60} className="text-gray-400" />
                        </div>
                        <h3 className="mt-4 font-semibold">
                            Bold and Edgy Look
                        </h3>
                         <p className="">This shows the brief description</p> 
                         <p className="text-sm">$400</p> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedLooks
