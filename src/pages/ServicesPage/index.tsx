import { Navbar } from "@/components/index"

const ServicesPage = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-white pt-20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-8">Services</h1>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">
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
                        <h2 className="text-3xl font-bold mb-6">
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
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
