import { useState } from "react"
import { Button, ClientInquiryModal } from "@/components/index"


export interface ContactFormInterface {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    referenceImage: File | null
}
const Contact = () => {
    const [contactForm, setContactForm] = useState<ContactFormInterface>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        referenceImage: null,
    })
    
    const [showInquiryModal, setShowInquiryModal] = useState(false)
    const handleSubmit = () => {
        //if (!user?.isLoggedIn) {
            //alert("You must be logged in to submit an inquiry.")
        //     navigate("/login")
        //     return
        // }
        setShowInquiryModal(true)
    }

    return (
        <section className="py-16 bg-[#3F6C54] pt-12">
            {showInquiryModal && (
            <ClientInquiryModal onClose={() => setShowInquiryModal(false)}/>)}
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 text-white">Contact</h2>
                
               
                <form className="space-y-6 mb-12 text-[#DBC8BC]" onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-left">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-[#cfe7cf] border-1 rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
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
                            variant="secondary"
                            className=""
                            
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
