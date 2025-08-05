import { Button } from "@/components/index"
import { Search } from "lucide-react"
import { useState } from "react"
import ClientTable from "./components/clientTable"
import { ChevronDown } from "lucide-react"

const Clients = () => {
    const [activeTab, setActiveTab] = useState("all")
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Clients</h1>
                <Button variant="secondary">Add Client</Button>
            </div>
            <div className="flex space-x-2 bg-[#eaf1ea] p-2 rounded-md mb-6">
                <Search color="#5d895d" />
                <input
                    type="text"
                    placeholder="Search clients"
                    className="text-[#5d895d] outline-none"
                />
            </div>
            <div className="flex space-x-8 mb-6">
                <button
                    onClick={() => setActiveTab("all")}
                    className={`p-2 font-semibold cursor-pointer flex items-center bg-[#eaf1ea] rounded-full ${activeTab === "all" ? "text-green-500 " : "text-gray-600"}`}
                >
                    All
                    <ChevronDown />
                </button>
                <button
                    onClick={() => setActiveTab("active")}
                    className={`p-2 font-semibold cursor-pointer flex items-center bg-[#eaf1ea] rounded-full ${activeTab === "active" ? "text-green-500 " : "text-gray-600"}`}
                >
                    Active
                    <ChevronDown />
                </button>
                <button
                    onClick={() => setActiveTab("inactive")}
                    className={`p-2 font-semibold cursor-pointer flex items-center bg-[#eaf1ea] rounded-full ${activeTab === "inactive" ? "text-green-500 " : "text-gray-600"}`}
                >
                    Inactive
                    <ChevronDown />
                </button>
            </div>
            <ClientTable />
        </div>
    )
}

export default Clients
