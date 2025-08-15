import { Pencil } from "lucide-react"
import dayjs from "dayjs"

interface InquiryCardProps {
  serviceType: string
  clientName: string
  createdAt: string | Date
  description: string
  status: "Pending" | "In Progress" | "Resolved" | string
  onClick: () => void
  onEdit: () => void
}

const InquiryCard: React.FC<InquiryCardProps>=({
  serviceType,
  clientName,
  createdAt,
  description,
  status,
  onClick,
  onEdit,
})=>{
    return(
        <div
      className="mb-4 bg-[#F4F4F4] py-2 px-4 rounded-lg cursor-pointer hover:bg-[#f1f1f1] transition"
      onClick={onClick}
    >
      {/* Top Row */}
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-lg">{serviceType}</p>
        <p className="text-sm text-gray-500">
          {dayjs(createdAt).format("DD MMM YYYY")}
        </p>
      </div>

      {/* Second Row */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-md text-gray-800">Client: {clientName}</p>
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${
              status === "Resolved"
                ? "bg-green-100 text-green-700"
                : status === "In Progress"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {status}
          </span>
<Pencil
  size={18}
  className="text-gray-500 hover:text-gray-700"
  onClick={(e) => {
    e.stopPropagation()
    onEdit()
  }}
/>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
    </div>
    )
}

export default InquiryCard;
