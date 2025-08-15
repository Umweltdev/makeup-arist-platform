import Modal from ".."
import { Button } from "@/components/index"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { X } from "lucide-react"
import { CreateServiceFormInput } from "@/types/service.type"


const CreateServiceModal = ({ onClose }: { onClose: () => void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateServiceFormInput>()
    const [primaryImage, setPrimaryImage] = useState<File | null>(null)
    const [additionalImages, setAdditionalImages] = useState<File[]>([])

    const categories = [
        "Bridal",
        "Evening",
        "Natural",
        "Special Occasion",
        "Photography",
    ]

    const onSubmit = (data: any) => {
        console.log("data", data)
        const formData = new FormData()
        for (const key in data) {
            formData.append(key, data[key])
        }
        if (primaryImage) formData.append("primaryImage", primaryImage)
        additionalImages.forEach((img, index) =>
            formData.append(`additionalImages[${index}]`, img)
        )
        console.log("form data", [...formData.entries()])
    }
    function uploadSingleFile(e: any) {
        setAdditionalImages([...additionalImages, ...e.target.files])
    }
    function deleteFile(e: any) {
        const newFiles = additionalImages.filter((_item, index) => index !== e)
        setAdditionalImages(newFiles)
    }
    const [serviceType, setServiceType] = useState("single")

    return (
        <Modal onClose={onClose}>
            <h1 className="text-3xl font-bold mb-8 text-center mt-4">
                Create a Service
            </h1>
            <form className="space-y-6 mb-12" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex space-x-4 mb-6 justify-center">
                    {["single", "class", "event"].map((type) => (
                        <button
                            type="button"
                            key={type}
                            onClick={() => setServiceType(type)}
                            className={`px-4 py-2 rounded-lg border ${serviceType === type ? "bg-green-500 text-white" : "bg-white"}`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Service Name
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg  "
                        {...register("serviceName", { required: true })}
                    />
                    {errors.serviceName && (
                        <span className="text-red-500 text-sm">Required</span>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Description
                    </label>
                    <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg  "
                        {...register("description", { required: true })}
                    />
                    {errors.description && (
                        <span className="text-red-500 text-sm">Required</span>
                    )}
                </div>
                {serviceType === "single" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Duration
                            </label>
                            <select
                                {...register("duration", { required: true })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            >
                                <option value={60}>60 min</option>
                                <option value={90}>90 min</option>
                                <option value={120}>120 min</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Base price
                            </label>
                            <input
                                type="number"
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg "
                                {...register("basePrice", {
                                    required: true,
                                    min: 0,
                                })}
                            />
                            {errors.basePrice && (
                                <span className="text-red-500 text-sm">
                                    Valid price required
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Categories
                            </label>
                            <select
                                className=" border-1 border-[#cfe7cf] rounded-lg px-4 py-3 "
                                {...register("category", { required: true })}
                            >
                                <option disabled>Select Category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                                {errors.category && (
                                    <span className="text-red-500 text-sm">
                                        Required
                                    </span>
                                )}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Preparation Instructions
                            </label>
                            <textarea
                                {...register("preparation")}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Primary Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    setPrimaryImage(e.target.files?.[0] || null)
                                }
                                disabled={additionalImages.length >= 4}
                                className="w-full border-[#cfe7cf] border border-1 rounded-lg px-4 py-3"
                            />
                            {primaryImage && (
                                <img
                                    src={URL.createObjectURL(primaryImage)}
                                    alt="Primary Preview"
                                    className="mt-2 h-24 rounded"
                                />
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Additional Images (up to 4)
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
                                {additionalImages.map((file, idx) => (
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
                    </>
                )}
                {serviceType === "class" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Duration
                            </label>
                            <input
                                type="text"
                                {...register("duration", { required: true })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                            {errors.duration && (
                                <span className="text-red-500 text-sm">
                                    Required
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Price per Person
                            </label>
                            <input
                                type="number"
                                {...register("pricePerPerson", {
                                    required: true,
                                })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                            {errors.pricePerPerson && (
                                <span className="text-red-500 text-sm">
                                    Required
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Minimum Participants
                            </label>
                            <input
                                type="number"
                                {...register("minParticipants", {
                                    required: true,
                                })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                            {errors.minParticipants && (
                                <span className="text-red-500 text-sm">
                                    Required
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Maximum Participants
                            </label>
                            <input
                                type="number"
                                {...register("maxParticipants", {
                                    required: true,
                                })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                            {errors.maxParticipants && (
                                <span className="text-red-500 text-sm">
                                    Required
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Materials Included
                            </label>
                            <textarea
                                {...register("materialsIncluded")}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Skill Level
                            </label>
                            <select
                                {...register("skillLevel", { required: true })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">
                                    Intermediate
                                </option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Class Date
                            </label>
                            <input
                                type="datetime-local"
                                {...register("classDate", { required: true })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                            {errors.classDate && (
                                <span className="text-red-500 text-sm">
                                    Required
                                </span>
                            )}
                        </div>
                    </>
                )}

                {serviceType === "event" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Event Type
                            </label>
                            <select
                                {...register("eventType", { required: true })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            >
                                <option value="Wedding">Wedding</option>
                                <option value="Corporate">Corporate</option>
                                <option value="Fashion Show">
                                    Fashion Show
                                </option>
                                <option value="Film/TV">Film/TV</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Package Details
                            </label>
                            <textarea
                                {...register("packageDetails", {
                                    required: true,
                                })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                            {errors.packageDetails && (
                                <span className="text-red-500 text-sm">
                                    Required
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Team Size
                            </label>
                            <input
                                type="number"
                                {...register("teamSize", { required: true })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                            {errors.teamSize && (
                                <span className="text-red-500 text-sm">
                                    Required
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Deposit Percentage
                            </label>
                            <input
                                type="number"
                                {...register("deposit", { required: true })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                            {errors.deposit && (
                                <span className="text-red-500 text-sm">
                                    Required
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Final Payment Terms
                            </label>
                            <input
                                type="text"
                                {...register("finalPayment", {
                                    required: true,
                                })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                            {errors.finalPayment && (
                                <span className="text-red-500 text-sm">
                                    Required
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Travel Radius Notes
                            </label>
                            <textarea
                                {...register("travelRadius", {
                                    required: true,
                                })}
                                className="w-full px-4 py-3 border border-[#cfe7cf] rounded-lg"
                            />
                            {errors.travelRadius && (
                                <span className="text-red-500 text-sm">
                                    Required
                                </span>
                            )}
                        </div>
                    </>
                )}
                <div>
                    <label className="inline-flex items-center mt-4">
                        <input
                            type="checkbox"
                            {...register("featured")}
                            className="form-checkbox h-5 w-5 text-green-600 accent-[green] cursor-pointer"
                        />
                        <span className="ml-2 text-sm">Mark as Featured</span>
                    </label>
                </div>
                <Button variant="primary" className="">
                    Submit
                </Button>
            </form>
        </Modal>
    )
}

export default CreateServiceModal
