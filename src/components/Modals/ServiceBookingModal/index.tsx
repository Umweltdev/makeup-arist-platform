import React, { useState } from "react"
import Modal from "../"
import "react-day-picker/style.css"
import { Service } from "@/types/service.type"
import { format } from "date-fns"

interface ClientDetails {
    name: string
    email: string
    phone: string
    location: string
    glamStyle: string
    skinTone: string
    allergies: string
    specialRequest: string
    lashes: boolean
    airbrushing: boolean
}
const ServiceBookingModal = ({
    onClose,
    setOpenCheckout,
    service,
}: {
    onClose: () => void
    setOpenCheckout: () => void
    service: Service
}) => {
    // const [activeModal, setActiveModal] = useState<string | null>(null);

    const [bookingStep, setBookingStep] = useState<number>(1)

    const [clientDetails, setClientDetails] = useState<ClientDetails>({
        name: "",
        email: "",
        phone: "",
        location: "",
        glamStyle: "",
        skinTone: "",
        allergies: "",
        specialRequest: "",
        lashes: false,
        airbrushing: false,
    })

    const handleBookingNext = () => {
        if (bookingStep < 4) setBookingStep(bookingStep + 1)
    }

    const handleBookingBack = () => {
        if (bookingStep > 1) setBookingStep(bookingStep - 1)
    }

    const resetBooking = () => {
        setBookingStep(1)
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
                            Confirm Service Details
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-6 mb-6">
                            <div className="space-y-2 ">
                               <div className="flex items-center justify-between">
                                    <p  className="text-lg font-semibold" >Service: </p>
                                    <p className=" text-[#5da45d] ">
                                        {service?.title}
                                    </p>
                                    
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-semibold">Date:</p>
                                    <p className=" text-[#5da45d] ">{format(
                                        new Date(service.nextAvailable),
                                        "dd/MM/yyyy"
                                    )}
                                </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-semibold">Time:</p>
                                    <p className=" text-[#5da45d] ">{format(
                                        new Date(service.nextAvailable),
                                        "HH:mm"
                                    )}
                                </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-semibold">Price:</p> 
                                    <p className=" text-[#5da45d] ">{service.price}
                                </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )

            case 2:
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
                                    className="w-full px-4 py-3 border rounded-lg "
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
                                    className="w-full px-4 py-3 border rounded-lg"
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
                                    className="w-full px-4 py-3 border rounded-lg "
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
                                    className="w-full px-4 py-3 border rounded-lg "
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
                                    className="w-full px-4 py-3 border rounded-lg "
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
                                    className="w-full px-4 py-3 border rounded-lg"
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
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Special Request
                                </label>
                                <textarea
                                    placeholder="List any allergies or sensitivities"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500"
                                    rows={3}
                                    value={clientDetails.allergies}
                                    onChange={(e) =>
                                        setClientDetails({
                                            ...clientDetails,
                                            specialRequest: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                )

            case 3:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-center">
                            Choose Add-Ons
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-green-600 accent-[green] cursor-pointer "
                                        checked={clientDetails.lashes}
                                        onChange={() =>
                                            setClientDetails({
                                                ...clientDetails,
                                                lashes: !clientDetails.lashes,
                                            })
                                        }
                                    />
                                    <span>False Lashes (+$20)</span>
                                </label>
                            </div>

                            <div>
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-green-600 accent-[green] cursor-pointer"
                                        checked={clientDetails.airbrushing}
                                        onChange={() =>
                                            setClientDetails({
                                                ...clientDetails,
                                                airbrushing: !clientDetails.airbrushing,
                                            })
                                        }
                                    />
                                    <span>Airbrushing (+$30)</span>
                                </label>
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
                                        {service?.title}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Date</span>
                                    <span className="font-medium">
                                        {format(
                                            new Date(service.nextAvailable),
                                            "dd/MM/yyyy"
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Time</span>
                                    <span className="font-medium">
                                        {format(
                                            new Date(service.nextAvailable),
                                            "HH:mm"
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Add-Ons
                                    </span>
                                    <span className="font-medium">
                                        {clientDetails.lashes &&
                                        clientDetails.airbrushing
                                            ? "lashes, Airbrushing"
                                            : clientDetails.lashes
                                              ? "lashes"
                                              : clientDetails.airbrushing
                                                ? "Airbrushing"
                                                : "Nil"}
                                    </span>
                                </div>
                                <div className="pt-3 border-t">
                                    <div className="flex justify-between text-lg font-semibold">
                                        <span>Total</span>
                                        <span>{service.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={setOpenCheckout}
                            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-medium"
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
                                className="bg-green-500 text-white px-8 py-2 rounded-lg hover:bg-green-600 cursor-pointer"
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

export default ServiceBookingModal
