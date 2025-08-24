import React, { useState } from "react"
import Modal from "../"
import { DayPicker, getDefaultClassNames } from "react-day-picker"
import "react-day-picker/style.css"

type ServiceId = "bridal" | "special" | "editorial" | "lesson"

interface Service {
    id: ServiceId
    title: string
    price: string
    description: string
}

interface ClientDetails {
    name: string
    email: string
    phone: string
    location: string
    glamStyle: string
    skinTone: string
    allergies: string
}
const BookingModal = ({
    onClose,
    setOpenCheckout,
}: {
    onClose: () => void
    setOpenCheckout: () => void
}) => {
    // const [activeModal, setActiveModal] = useState<string | null>(null);
    const defaultClassNames = getDefaultClassNames()
    const [bookingStep, setBookingStep] = useState<number>(1)
    const [selectedService, setSelectedService] = useState<Service | null>(null)
    const [selectedDate, setSelectedDate] = useState<number | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [clientDetails, setClientDetails] = useState<ClientDetails>({
        name: "",
        email: "",
        phone: "",
        location: "",
        glamStyle: "",
        skinTone: "",
        allergies: "",
    })

    const [selected, setSelected] = useState<Date>()
    const services: Record<ServiceId, Service> = {
        bridal: {
            id: "bridal",
            title: "Bridal Makeup",
            price: "$250",
            description:
                "Includes consultation, trial session, and on-site makeup application on your wedding day.",
        },
        special: {
            id: "special",
            title: "Special Occasion Makeup",
            price: "$150",
            description: "Perfect for proms, galas, and other special events.",
        },
        editorial: {
            id: "editorial",
            title: "Editorial Makeup",
            price: "$200",
            description:
                "Makeup for professional photoshoots and creative projects.",
        },
        lesson: {
            id: "lesson",
            title: "Makeup Lesson",
            price: "$200",
            description: "Learn to apply makeup like a pro.",
        },
    }

    const handleServiceSelection = (serviceId: ServiceId) => {
        setSelectedService(services[serviceId])
        //handleBookingNext();
    }

    const handleBookingNext = () => {
        if (bookingStep < 4) setBookingStep(bookingStep + 1)
    }

    const handleBookingBack = () => {
        if (bookingStep > 1) setBookingStep(bookingStep - 1)
    }

    const resetBooking = () => {
        setBookingStep(1)
        setSelectedService(null)
        setSelectedDate(null)
        setSelectedTime(null)
        setClientDetails({
            name: "",
            email: "",
            phone: "",
            location: "",
            glamStyle: "",
            skinTone: "",
            allergies: "",
        })
        onClose()
    }

    const renderStepIndicators = () => (
        <div className="flex justify-center mb-8">
            {[1, 2, 3, 4].map((step, index) => (
                <React.Fragment key={step}>
                    <div
                        className={`w-3 h-3 rounded-full ${
                            bookingStep >= step ? "bg-black" : "bg-gray-300"
                        }`}
                    />
                    {index < 3 && (
                        <div
                            className={`w-12 h-0.5 mt-1.5 mx-1 ${
                                bookingStep > step ? "bg-black" : "bg-gray-300"
                            }`}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    )

    const renderStep = () => {
        switch (bookingStep) {
            case 1:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-center">
                            Select a service
                        </h2>
                        <div className="space-y-4">
                            <div
                                className="w-full text-left p-6 border border-[#cfe7cf] rounded-lg hover:bg-gray-50 transition-colors"
                                onClick={() => handleServiceSelection("bridal")}
                            >
                                <div className="flex justify-between items-center">
                                    <label>
                                        <h3 className="text-lg font-semibold">
                                            Bridal Makeup
                                        </h3>
                                        <p className="text-[#5da45d]">
                                            For your special day
                                        </p>
                                    </label>
                                    <input
                                        type="radio"
                                        className="outline-none checked:bg-[#5da45d] accent-[#5da45d] focus:ring-0 w-6 h-6"
                                        onChange={() =>
                                            handleServiceSelection("bridal")
                                        }
                                        checked={
                                            selectedService?.id === "bridal"
                                        }
                                    />
                                </div>
                            </div>

                            <div
                                className="w-full text-left p-6 border border-[#cfe7cf] rounded-lg hover:bg-gray-50 transition-colors"
                                onClick={() =>
                                    handleServiceSelection("special")
                                }
                            >
                                <div className="flex justify-between items-center">
                                    <label>
                                        <h3 className="text-lg font-semibold">
                                            Special Event Makeup
                                        </h3>
                                        <p className="text-[#5da45d]">
                                            For parties, galas, and more
                                        </p>
                                    </label>
                                    <input
                                        type="radio"
                                        className="outline-none checked:bg-[#5da45d] accent-[#5da45d] focus:ring-0 w-6 h-6"
                                        onChange={() =>
                                            handleServiceSelection("special")
                                        }
                                        checked={
                                            selectedService?.id === "special"
                                        }
                                    />
                                </div>
                            </div>

                            <div
                                onClick={() =>
                                    handleServiceSelection("editorial")
                                }
                                className="w-full text-left p-6 border border-[#cfe7cf] rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex justify-between items-center">
                                    <label>
                                        <h3 className="text-lg font-semibold">
                                            Editorial Makeup
                                        </h3>
                                        <p className="text-[#5da45d]">
                                            For photoshoots and publications
                                        </p>
                                    </label>
                                    <input
                                        type="radio"
                                        className="outline-none checked:bg-[#5da45d] accent-[#5da45d] focus:ring-0 w-6 h-6"
                                        onChange={() =>
                                            handleServiceSelection("editorial")
                                        }
                                        checked={
                                            selectedService?.id === "editorial"
                                        }
                                    />
                                </div>
                            </div>

                            <div className="w-full text-left p-6 border border-[#cfe7cf] rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="flex justify-between items-center">
                                    <label>
                                        <h3 className="text-lg font-semibold">
                                            Makeup Lesson
                                        </h3>
                                        <p className="text-[#5da45d]">
                                            Learn to apply makeup like a pro
                                        </p>
                                    </label>
                                    <input
                                        type="radio"
                                        className="outline-none checked:bg-[#5da45d] accent-[#5da45d] focus:ring-0 w-6 h-6"
                                        onChange={() =>
                                            handleServiceSelection("lesson")
                                        }
                                        checked={
                                            selectedService?.id === "lesson"
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 2:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-center">
                            Select Date & Time
                        </h2>

                        <div className="mb-8">
                            <DayPicker
                                mode="single"
                                selected={selected}
                                classNames={{
                                    today: `border-amber-500`, // Add a border to today's date
                                    day: `${defaultClassNames.day} sm:p-4 hover:bg-gray-100`,
                                    selected: `bg-green-500 border-amber-500 rounded-full text-white hover:bg-green-500`, // Highlight the selected day
                                    root: `${defaultClassNames.root} sm:p-10 w-full`, // Add a shadow to the root element
                                    chevron: `  fill-[green]`, // Change the color of the chevron
                                }}
                                className="w-full"
                                onSelect={setSelected}
                                footer={
                                    selected
                                        ? `Selected: ${selected.toLocaleDateString()}`
                                        : "Pick a day."
                                }
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Select Time</h3>
                            <select
                                value={selectedTime || ""}
                                onChange={(e) =>
                                    setSelectedTime(e.target.value)
                                }
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                            >
                                <option value="">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                            </select>
                        </div>
                    </div>
                )

            case 3:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-center">
                            Your Information
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                                    value={clientDetails.name}
                                    onChange={(e) =>
                                        setClientDetails({
                                            ...clientDetails,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500"
                                    value={clientDetails.email}
                                    onChange={(e) =>
                                        setClientDetails({
                                            ...clientDetails,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500"
                                    value={clientDetails.phone}
                                    onChange={(e) =>
                                        setClientDetails({
                                            ...clientDetails,
                                            phone: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your address"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500"
                                    value={clientDetails.location}
                                    onChange={(e) =>
                                        setClientDetails({
                                            ...clientDetails,
                                            location: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Glam Style
                                </label>
                                <select
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500"
                                    value={clientDetails.glamStyle}
                                    onChange={(e) =>
                                        setClientDetails({
                                            ...clientDetails,
                                            glamStyle: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">Select glam style</option>
                                    <option value="natural">Natural</option>
                                    <option value="glam">Full Glam</option>
                                    <option value="soft">Soft Glam</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Skin Tone
                                </label>
                                <select
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500"
                                    value={clientDetails.skinTone}
                                    onChange={(e) =>
                                        setClientDetails({
                                            ...clientDetails,
                                            skinTone: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">Select skin tone</option>
                                    <option value="fair">Fair</option>
                                    <option value="medium">Medium</option>
                                    <option value="olive">Olive</option>
                                    <option value="deep">Deep</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Allergies/Sensitivities
                                </label>
                                <textarea
                                    placeholder="List any allergies or sensitivities"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500"
                                    rows={3}
                                    value={clientDetails.allergies}
                                    onChange={(e) =>
                                        setClientDetails({
                                            ...clientDetails,
                                            allergies: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                )

            case 4:
                return (
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold mb-8 text-center">
                            Summary & Checkout
                        </h2>

                        <div className="bg-gray-50 rounded-lg p-6 mb-6">
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Service
                                    </span>
                                    <span className="font-medium">
                                        {selectedService?.title}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Date</span>
                                    <span className="font-medium">
                                        July {selectedDate || 15}, 2024
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Time</span>
                                    <span className="font-medium">
                                        {selectedTime || "10:00 AM"}
                                    </span>
                                </div>
                                <div className="pt-3 border-t">
                                    <div className="flex justify-between text-lg font-semibold">
                                        <span>Total</span>
                                        <span>
                                            {selectedService?.price || "$150"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={setOpenCheckout}
                            className="w-full bg-green-1000 text-white py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-medium"
                        >
                            Book Now
                        </button>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <Modal onClose={resetBooking}>
            <div className="w-full max-w-2xl">
                {bookingStep < 4 && renderStepIndicators()}
                {renderStep()}
                {bookingStep < 4 && (
                    <div
                        className={`${bookingStep > 1 ? "justify-between" : "justify-end-safe"} flex  mt-8`}
                    >
                        {bookingStep > 1 && (
                            <button
                                onClick={handleBookingBack}
                                className="text-gray-600 hover:text-gray-800 cursor-pointer float-right"
                            >
                                Back
                            </button>
                        )}
                        {bookingStep < 4 && (
                            <button
                                onClick={handleBookingNext}
                                className="bg-green-1000 text-white px-8 py-2 rounded-lg hover:bg-green-600 cursor-pointer"
                            >
                                Next
                            </button>
                        )}
                    </div>
                )}
            </div>
        </Modal>
    )
}

export default BookingModal
