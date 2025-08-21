import { X } from "lucide-react"

const Modal = ({
    children,
    onClose,
}: {
    children: React.ReactNode
    onClose: () => void
}) => {
    return (
        <div className="fixed inset-0 bg-black/80  bg-opacity-20 backdrop-blur-md  flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
                >
                    <X size={24} />
                </button>
                <div className="p-8">{children}</div>
            </div>
        </div>
    )
}

export default Modal
