import ServicesTable from "./servicesTable"
import EventsTable from "./eventsTable"
import { Button, CreateServiceModal } from "@/components/index"
import { useState } from "react"

const Services = () => {
    const [showCreateServiceModal, setShowCreateServiceModal] = useState(false)
    return (
        <div className="">
            {showCreateServiceModal && (
                <CreateServiceModal
                    onClose={() => setShowCreateServiceModal(false)}
                />
            )}

            <h1 className="text-3xl font-bold mb-4 text-green-600">Services & Pricing</h1>
            <div className="flex justify-between my-4 ">
                <h2 className="text-2xl font-bold ">Services</h2>
                <Button
                    variant="secondary"
                    onClick={() => setShowCreateServiceModal(true)}
                >
                    Add Service
                </Button>
            </div>
            <ServicesTable />
            <div className="flex justify-between mb-4 mt-10">
                <h2 className="text-2xl font-bold">Events</h2>
                <Button variant="secondary">Add Event</Button>
            </div>
            <EventsTable />
        </div>
    )
}
export default Services
