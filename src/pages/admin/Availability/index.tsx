import { Button } from "@/components/index"

const Availability = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Availability Management</h1>
            <p className="text-[#679067] my-4">
                Manage your weekly working hours , block out dates/time for
                unavailability, and manage class event shots
            </p>
            <h5 className="text-xl font-semibold mb-4">Weekly Working Hours</h5>
            <form action="">
                <div className="flex flex-col mb-4">
                    <label className="mb-2">Day</label>
                    <input
                        type="date"
                        name="day"
                        className="border rounded-lg border-[#cfe7cf] max-w-xl p-3"
                    />
                </div>
                <div className="flex mt-4 max-w-xl gap-4">
                    <div className="flex flex-col w-[50%]">
                        <label className="mb-2">Start Time</label>
                        <input
                            type="time"
                            name="startTime"
                            className="border rounded-lg border-[#cfe7cf]  p-3"
                        />
                    </div>
                    <div className="flex flex-col w-[50%] mb-4">
                        <label className="mb-2">End Time</label>
                        <input
                            type="time"
                            name="endTime"
                            className="border rounded-lg border-[#cfe7cf]  p-3"
                        />
                    </div>
                </div>
                <p className="font-semibold my-4 text-xl">
                    Block Out Dates/Times
                </p>
                <div className="flex flex-col mb-4">
                    <label className="mb-2">Day</label>
                    <input
                        type="date"
                        name="day"
                        className="border rounded-lg border-[#cfe7cf] max-w-xl p-3"
                    />
                </div>
                <div className="flex mt-4 max-w-xl gap-4 mb-6">
                    <div className="flex flex-col w-[50%]">
                        <label className="mb-2">Start Time</label>
                        <input
                            type="time"
                            name="startTime"
                            className="border rounded-lg border-[#cfe7cf]  p-3"
                        />
                    </div>
                    <div className="flex flex-col w-[50%] mb-6">
                        <label className="mb-2">End Time</label>
                        <input
                            type="time"
                            name="endTime"
                            className="border rounded-lg border-[#cfe7cf]  p-3"
                        />
                    </div>
                </div>
                <p className="font-semibold text-xl my-4 max-w-xl">
                    Class/Event Slots
                </p>
                <div className="flex flex-col mb-6">
                    <label className="mb-2">Event Name</label>
                    <input
                        type="date"
                        name="day"
                        className="border rounded-lg border-[#cfe7cf]  p-3 "
                    />
                </div>
                <div className="flex mt-4 max-w-xl gap-4 mb-6">
                    <div className="flex flex-col w-[50%]">
                        <label className="mb-2">Start Time</label>
                        <input
                            type="time"
                            name="startTime"
                            className="border rounded-lg border-[#cfe7cf]  p-3"
                        />
                    </div>
                    <div className="flex flex-col w-[50%] mb-4">
                        <label className="mb-2">End Time</label>
                        <input
                            type="time"
                            name="endTime"
                            className="border rounded-lg border-[#cfe7cf]  p-3"
                        />
                    </div>
                </div>
                <div className="flex flex-col max-w-xl">
                    <label className="mb-2">Capacity</label>
                    <input
                        type="text"
                        name="capacity"
                        className="border rounded-lg border-[#cfe7cf]  p-3"
                    />
                </div>
                <Button variant="secondary" className="mt-4">
                    Save changes
                </Button>
            </form>
        </div>
    )
}

export default Availability
