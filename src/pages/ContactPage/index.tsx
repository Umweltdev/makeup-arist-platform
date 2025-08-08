import { Navbar, Button } from "@/components/index"
import { useState } from "react"
import type { ContactFormInterface } from "../LandingPage/components/contact"

const ContactPage = () => {
    const [contactForm, setContactForm] = useState<ContactFormInterface>({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            referenceImage: null,
        })

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-white pt-20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl font-bold">Contact</h1>
                        
                    </div>

                    <div className="max-w-4xl mx-auto px-4 text-center min-h-screen bg-white pt-8">
                <form className="space-y-6 mb-12">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-left">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
                            value={contactForm.name}
                            onChange={(e) =>
                                setContactForm({
                                    ...contactForm,
                                    name: e.target.value,
                                })
                            }
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-left">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
                            value={contactForm.email}
                            onChange={(e) =>
                                setContactForm({
                                    ...contactForm,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-left">
                            Phone
                        </label>
                        <input
                            type="tel"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
                            value={contactForm.phone}
                            onChange={(e) =>
                                setContactForm({
                                    ...contactForm,
                                    phone: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-left">
                            Subject
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            value={contactForm.subject}
                            onChange={(e) =>
                                setContactForm({
                                    ...contactForm,
                                    subject: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-left">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
                            value={contactForm.message}
                            onChange={(e) =>
                                setContactForm({
                                    ...contactForm,
                                    message: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-left">
                            Reference Image
                        </label>
                        <input
                            type="file"
                            className="w-full px-4 py-3 border border-1 rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
                            ///value={contactForm.referenceImage}
                            onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) {
                                    setContactForm({
                                        ...contactForm,
                                        referenceImage: file,
                                    })
                                }
                            }}
                        />
                    </div>
                    <div className="flex">
                        <Button
                            variant="primary"
                            className=""
                            
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactPage
