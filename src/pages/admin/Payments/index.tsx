import { useState } from "react"
import TransactionHistoryTable from "./transactionHistoryTable"

const Payments = () => {
    const [activeTab, setActiveTab] = useState("transactions")
    return (
        <div>
            <h1 className="text-3xl font-bold text-green-600">Payments & Reporting</h1>
            <div className="flex space-x-8 border-b my-8">
                <button
                    onClick={() => setActiveTab("transactions")}
                    className={`pb-4 font-semibold cursor-pointer ${activeTab === "transactions" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                >
                    Transactions
                </button>
                <button
                    onClick={() => setActiveTab("revenueReports")}
                    className={`pb-4 font-semibold cursor-pointer ${activeTab === "revenueReports" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                >
                    Revenue Reports
                </button>
                <button
                    onClick={() => setActiveTab("stripeSettings")}
                    className={`pb-4 font-semibold cursor-pointer ${activeTab === "stripeSettings" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"}`}
                >
                    Stripe Settings
                </button>
            </div>
            <h3 className="font-bold text-2xl my-4">Transaction History</h3>
            <TransactionHistoryTable />
        </div>
    )
}

export default Payments
