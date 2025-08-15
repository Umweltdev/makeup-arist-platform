import { Navbar, Button } from "@/components/index"
import { useState } from "react"
import { InquiryFormInput } from "@/types/inquiry.type"
import { useForm } from "react-hook-form"
import { X } from "lucide-react"

const ContactPage = () => {
    const [referenceImages, setReferenceImages] = useState<File[]>([])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InquiryFormInput>()
    function uploadSingleFile(e: any) {
        setReferenceImages([...referenceImages, ...e.target.files])
    }
    function deleteFile(e: any) {
        const newFiles = referenceImages.filter((_item, index) => index !== e)
        setReferenceImages(newFiles)
    }
    const onSubmit = (data: any) => {
        console.log("data", data)
        const formData = new FormData()
        for (const key in data) {
            formData.append(key, data[key])
        }

        referenceImages.forEach((img, index) =>
            formData.append(`additionalImages[${index}]`, img)
        )
        console.log("form data", [...formData.entries()])
    }
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-white pt-20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-center mb-8">
                        <h1 className="text-4xl font-bold">Contact Us</h1>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 text-center min-h-screen bg-white pt-8">
                        <form className="space-y-6 mb-12" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-left">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border rounded-lg "
                                    {...register("name", { required: true })}
                                    required
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm">
                                        Required
                                    </span>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-left">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm">
                                        Required
                                    </span>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-left">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
                                    {...register("phone", { required: true })}
                                />
                                {errors.phone && (
                                    <span className="text-red-500 text-sm">
                                        Required
                                    </span>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-left">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-0 focus:ring-green-500 focus:border-transparent"
                                    {...register("message", { required: true })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-left">
                                    Event Type
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    {...register("eventType", {
                                        required: true,
                                    })}
                                />
                                {errors.eventType && (
                                    <span className="text-red-500 text-sm">
                                        Required
                                    </span>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-left">
                                    Event Date
                                </label>
                                <input
                                    type="datetime-local"
                                    {...register("eventDate", {
                                        required: true,
                                    })}
                                    className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                                />
                                {errors.eventDate && (
                                    <span className="text-red-500 text-sm">
                                        Required
                                    </span>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-left">
                                    Number of people (if applicable)
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg "
                                    {...register("noOfPeople")}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-left">
                                    Reference Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    max={4}
                                    multiple
                                    onChange={(e) => {
                                        uploadSingleFile(e)
                                        // const files = Array.from(
                                        //     e.target.files || []
                                        // ).slice(0, 4)
                                        // setAdditionalImages(files)
                                    }}
                                    className="w-full border-[#cfe7cf] border border-1 rounded-lg px-4 py-3"
                                />
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    {referenceImages.map((file, idx) => (
                                        <div key={idx} className="relative">
                                            <img
                                                src={URL.createObjectURL(file)}
                                                alt={`Additional ${idx}`}
                                                className="h-16 rounded w-16"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => deleteFile(idx)}
                                                className="absolute -top-2 -right-1 cursor-pointer"
                                            >
                                                <X size={20} className="" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex">
                                <Button variant="primary" className="w-full">
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
