import { Phone, Mail } from "lucide-react"

const Contact = () => {
    return (
        <section className="py-16 bg-white mt-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Contact</h2>
                <p className="text-gray-600 mb-8">
                    For inquiries and bookings, please reach out via email or
                    phone. Follow me on social media for the latest updates and
                    makeup inspiration.
                </p>
                <div className="space-y-4 mb-8">
                    <p className="flex items-center justify-center">
                        <Mail className="mr-2" size={20} />
                        sophia.carter@email.com
                    </p>
                    <p className="flex items-center justify-center">
                        <Phone className="mr-2" size={20} />
                        +1-555-987-6543
                    </p>
                </div>
                <div className="flex justify-center space-x-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-instagram-icon lucide-instagram"
                    >
                        <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    {/* <Instagram className="text-gray-600 hover:text-gray-800 cursor-pointer" size={24} /> */}
                    {/* <Facebook className="text-gray-600 hover:text-gray-800 cursor-pointer" size={24} /> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-facebook-icon lucide-facebook"
                    >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Contact
