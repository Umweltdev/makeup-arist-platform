import { Button } from "@/components/index"
import { useState, } from "react"
import { DayPicker,  } from "react-day-picker"
import "react-day-picker/style.css"
import { format } from "date-fns"
import { seed } from "@/utils/helpers"

import type { Booking } from "@/types/booking.type"

const toISODate = (d: Date) => format(d, "yyyy-MM-dd")
const Bookings = () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
        new Date()
    )
    const [activeTab, setActiveTab] = useState("calendar")
    //const [selected, setSelected] = useState<Date>()
     const [_createDatePrefill, setCreateDatePrefill] = useState<
         string | undefined
     >(undefined)
    const [_selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
    const [filters, setFilters] = useState({ date: "", status: "", client: "" })
    //const defaultClassNames = getDefaultClassNames()
    const [bookings, _setBookings] = useState<Booking[]>(seed)
    //const [showCreateModal, setShowCreateModal] = useState(false)
    // Map of date → count (for small indicators under calendar days if you want)
    // const countsByDate = useMemo(() => {
    //     const map: Record<string, number> = {}
    //     bookings.forEach((b) => {
    //         map[b.date] = (map[b.date] || 0) + 1
    //     })
    //     return map
    // }, [bookings])

    const selectedISO = selectedDate ? toISODate(selectedDate) : ""
    const bookingsForSelectedDate = bookings.filter(
        (b) => b.date === selectedISO
    )

    const filteredList = bookings.filter((b) => {
        const byDate = !filters.date || b.date === filters.date
        const byStatus = !filters.status || b.status === filters.status
        const byClient =
            !filters.client ||
            b.name.toLowerCase().includes(filters.client.toLowerCase())
        return byDate && byStatus && byClient
    })

    // const upsertBooking = (updated: Booking) =>
    //     setBookings((prev) =>
    //         prev.map((b) => (b.id === updated.id ? updated : b))
    //     )

    // const deleteBooking = (id: string) =>
    //     setBookings((prev) => prev.filter((b) => b.id !== id))

    // const addBooking = (b: Booking) => setBookings((prev) => [...prev, b])

    return (
        <div className="mb-2">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-green-600">Bookings</h1>
                <Button variant="secondary">New Booking</Button>
            </div>
            <div className="flex-1">
                <div className="flex gap-6 mb-4 border-b">
                    <button
                        className={` pb-2  font-medium cursor-pointer ${activeTab === "calendar" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"} `}
                        onClick={() => setActiveTab("calendar")}
                    >
                        Calendar
                    </button>
                    <button
                        className={`text-gray-500 pb-2 cursor-pointer ${activeTab === "list" ? "text-green-500 border-b-2 border-green-500" : "text-gray-600"} `}
                        onClick={() => setActiveTab("list")}
                    >
                        List
                    </button>
                </div>
                {activeTab === "calendar" && (
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white  p-4">
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={(d) => {
                                    setSelectedDate(d)
                                    // If a day with no bookings is selected, allow quick creation
                                    const iso = d ? toISODate(d) : undefined
                                    setCreateDatePrefill(iso)
                                }}
                                className="w-full"
                            />
                            {/* Tiny legend for counts (optional) */}
                            <div className="text-sm text-gray-500 mt-2">
                                {selectedDate && (
                                    <span>
                                        {format(selectedDate, "PPP")} —{" "}
                                        {bookingsForSelectedDate.length} booking
                                        {bookingsForSelectedDate.length === 1
                                            ? ""
                                            : "s"}
                                    </span>
                                )}
                            </div>
                            {selectedDate &&
                                bookingsForSelectedDate.length === 0 && (
                                    <div className="mt-4">
                                        <button
                                            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                                            // onClick={() => setShowCreateModal(true)}
                                        >
                                            Add booking for{" "}
                                            {format(selectedDate, "PPP")}
                                        </button>
                                    </div>
                                )}
                        </div>{" "}
                        {/* Selected day list */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">
                                Selected Day
                            </h2>
                            {/* {bookingsForSelectedDate.length === 0 ? (
              <p className="text-gray-500">No bookings for this day.</p>
            ) : ( */}
                            <ul className="flex flex-col gap-3">
                                {bookings.map((b) => (
                                    <li
                                        key={b.id}
                                        className="flex justify-between items-center rounded p-2 hover:bg-gray-50 cursor-pointer"
                                        onClick={() => setSelectedBooking(b)}
                                    >
                                        <div className="flex items-center gap-3">
                                            {b.image && (
                                                <img
                                                    src={b.image}
                                                    alt={b.name}
                                                    className="w-10 h-10 rounded-full"
                                                />
                                            )}
                                            <div>
                                                <p className="font-medium">
                                                    {b.name}
                                                </p>
                                                <p className="text-sm text-[#5d895d]">
                                                    {b.service} · {b.type}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-700">
                                                {b.time}
                                            </p>
                                            <p className="text-xs text-gray-500 capitalize">
                                                {b.status}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {/* )} */}
                        </div>
                    </div>
                )}

                {activeTab === "list" && (
                    <div className="bg-white round p-4">
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-3">
                            <input
                                type="date"
                                className="border rounded px-3 py-2"
                                value={filters.date}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        date: e.target.value,
                                    })
                                }
                            />
                            <select
                                className="border rounded px-3 py-2"
                                value={filters.status}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        status: e.target.value,
                                    })
                                }
                            >
                                <option value="">All Statuses</option>
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="completed">Completed</option>
                                <option value="canceled">Canceled</option>
                            </select>
                            <input
                                className="border rounded px-3 py-2"
                                placeholder="Client name"
                                value={filters.client}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        client: e.target.value,
                                    })
                                }
                            />
                            <button
                                className="border rounded px-3 py-2"
                                onClick={() =>
                                    setFilters({
                                        date: "",
                                        status: "",
                                        client: "",
                                    })
                                }
                            >
                                Clear Filters
                            </button>
                        </div>

                        <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr className="text-left ">
                                        <th className="px-6 py-3">Client</th>
                                        <th className="px-6 py-3">Service</th>
                                        <th className="px-6 py-3">Type</th>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Time</th>
                                        <th className="px-6 py-3">Status</th>
                                        
                                        <th className="px-6 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredList.map((b) => (
                                        <tr
                                            key={b.id}
                                            className=""
                                        >
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                
                                                    {b.name}
                                                
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {b.service}
                                            </td>
                                            <td className="py-4 px-4 capitalize">
                                                {b.type}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {b.date}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {b.time}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap capitalize">
                                                {b.status}
                                            </td>
                                           
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex gap-2">
                                                    <button
                                                        className="px-2 py-1 rounded border"
                                                        onClick={() =>
                                                            setSelectedBooking(
                                                                b
                                                            )
                                                        }
                                                    >
                                                        View
                                                    </button>
                                                   
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredList.length === 0 && (
                                        <tr>
                                            <td
                                                colSpan={8}
                                                className="py-6 text-center text-gray-500"
                                            >
                                                No bookings match your filters.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
            {/* Selected Day */}
            {/* <div className="mt-6">
                <h2 className="text-xl font-bold my-4 ">Selected Day</h2>

                <ul className="flex flex-col gap-4">
                    {bookings.map((b, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={b.image}
                                    alt={b.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-medium">{b.name}</p>
                                    <p className="text-sm text-[#5d895d]">
                                        {b.service}
                                    </p>
                                </div>
                            </div>
                            <p className="text-md text-gray-600 whitespace-nowrap">
                                {b.time}
                            </p>
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    )
}

export default Bookings
