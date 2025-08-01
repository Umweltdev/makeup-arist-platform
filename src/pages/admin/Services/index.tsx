import ServicesTable from "./servicesTable";
import EventsTable from "./eventsTable";
import {Button} from "@/components/index"

const Services=()=>{
    return(
        <div className="">
            <h1 className="text-3xl font-bold mb-4">Services& Pricing</h1>
            <div className="flex justify-between my-4">
                <h2 className="text-2xl font-bold">Services</h2>
                <Button variant="secondary">Add Service</Button>

            </div>
            <ServicesTable/>
            <div className="flex justify-between mb-4 mt-10">
                <h2 className="text-2xl font-bold">Events</h2>
                <Button variant="secondary">Add Event</Button>

            </div>
            <EventsTable/>
        </div>
    )
}
export default Services;