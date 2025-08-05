import { User } from "lucide-react"

const AboutTheArtist = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">About the Artist</h2>
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <User size={50} className="text-gray-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Sophia Carter</h3>
                <p className="text-gray-600 mb-6">Makeup Artist</p>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    With over 10 years of experience in the beauty industry,
                    Sophia Carter is a professional makeup artist dedicated to
                    enhancing natural beauty and creating stunning looks for any
                    occasion. Her passion for makeup and commitment to client
                    satisfaction make her a sought-after artist for weddings,
                    special events, and editorial work.
                </p>
            </div>
        </section>
    )
}

export default AboutTheArtist
