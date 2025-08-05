import { X, User } from "lucide-react"
import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold">About the Artist</h1>
                    <X
                        className="cursor-pointer hover:text-gray-600"
                        size={28}
                        onClick={() => navigate("/")}
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <User size={60} className="text-gray-500" />
                    </div>
                    <h2 className="text-3xl font-semibold mb-2">
                        Olivia Bennett
                    </h2>
                    <p className="text-gray-600 mb-8">Makeup Artist</p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Olivia Bennett is a professional makeup artist with over
                        10 years of experience in the beauty industry. Her
                        philosophy is to enhance natural beauty and create a
                        flawless, radiant look for every client. Olivia
                        specializes in bridal, editorial, and special event
                        makeup, using high-quality products and techniques to
                        achieve stunning results.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
