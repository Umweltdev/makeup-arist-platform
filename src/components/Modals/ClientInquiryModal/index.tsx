import { useState } from "react"
import { Star, User, MessageCircle, Send, ThumbsUp } from "lucide-react"
import Modal from "../"
import {Button} from "@/components/index"

const ClientInquiryPage = ({ onClose }: { onClose: () => void }) => {
    const [inquiryForm, setInquiryForm] = useState({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        details: "",
    })
    const [message, setMessage] = useState("")
    return (
        <Modal onClose={onClose}>
            <div className="min-h-screen bg-white ">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8">Client Inquiry</h1>

                    <form className="space-y-6 mb-12">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={inquiryForm.name}
                                onChange={(e) =>
                                    setInquiryForm({
                                        ...inquiryForm,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={inquiryForm.email}
                                onChange={(e) =>
                                    setInquiryForm({
                                        ...inquiryForm,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={inquiryForm.phone}
                                onChange={(e) =>
                                    setInquiryForm({
                                        ...inquiryForm,
                                        phone: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Event Date
                            </label>
                            <input
                                type="date"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={inquiryForm.eventDate}
                                onChange={(e) =>
                                    setInquiryForm({
                                        ...inquiryForm,
                                        eventDate: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Event Type
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={inquiryForm.eventType}
                                onChange={(e) =>
                                    setInquiryForm({
                                        ...inquiryForm,
                                        eventType: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Inquiry Details
                            </label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={inquiryForm.details}
                                onChange={(e) =>
                                    setInquiryForm({
                                        ...inquiryForm,
                                        details: e.target.value,
                                    })
                                }
                            />
                        </div>
                         <Button
                            variant="primary"
                            className=""
                            
                        >
                            Submit
                        </Button>
                    </form>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">
                            Client Feedback
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                    <User size={24} className="text-gray-500" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h3 className="font-semibold">
                                                Chloe Harper
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                2023-06-15
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-green-500 fill-current"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-700">
                                        I had a fantastic experience with
                                        Glamify for my engagement photoshoot.
                                        The makeup artist was professional,
                                        talented, and made me feel beautiful.
                                        The makeup lasted all day and looked
                                        amazing in the photos. I highly
                                        recommend their services!
                                    </p>
                                    <div className="flex items-center space-x-4 mt-4">
                                        <button className="flex items-center text-gray-500 hover:text-gray-700">
                                            <ThumbsUp className="w-5 h-5 mr-1" />
                                            3
                                        </button>
                                        <button className="flex items-center text-gray-500 hover:text-gray-700">
                                            <MessageCircle className="w-5 h-5 mr-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Direct Messages
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="border-b pb-4 mb-4">
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-green-500 font-semibold">
                                        Glamify
                                    </span>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <p className="text-gray-700">
                                        Hi Olivia, thank you for your inquiry!
                                        I'm available on September 22nd and
                                        would love to discuss your wedding
                                        makeup. I'll send you a detailed package
                                        and quote shortly. Do you have any
                                        reference photos of the looks you're
                                        interested in?
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-end space-x-2">
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                    <User size={20} className="text-gray-500" />
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="w-full px-4 py-3 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                    />
                                </div>
                                <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors">
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ClientInquiryPage
