import {Button} from "@/components/index"
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface Booking {
  name: string;
  service: string;
  time: string;
  image: string;
}

const bookingsData: Record<string, Booking[]> = {
  "2024-07-05": [
    {
      name: "Sophia Miller",
      service: "Bridal Makeup",
      time: "10:00 AM",
      image: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Olivia Carter",
      service: "Special Event Makeup",
      time: "2:00 PM",
      image: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Isabella Davis",
      service: "Photoshoot Makeup",
      time: "5:00 PM",
      image: "https://i.pravatar.cc/40?img=3",
    },
  ],
};
const Bookings=()=>{
    const [selectedDate, setSelectedDate] = useState("2024-07-05");
    const [activeTab, setActiveTab] =useState("calendar")
    const [selected, setSelected] = useState<Date>();
  const bookings = bookingsData[selectedDate] || [];
    return(
        <div className="mb-2">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Bookings</h1>
                <Button variant="secondary">New Booking</Button>
            </div>   
            <div className="flex-1">
            <div className="flex gap-6 mb-4 border-b">
              <button className={` pb-2  font-medium cursor-pointer ${activeTab === 'calendar' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'} `} onClick={()=>setActiveTab("calendar")}>Calendar</button>
              <button className={`text-gray-500 pb-2 cursor-pointer ${activeTab === 'list' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'} `} onClick={()=>setActiveTab("list")}>List</button>
             
            </div>
             <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
 {/* <div className="grid grid-cols-7 gap-2 text-center">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div key={d} className="font-medium text-gray-600">{d}</div>
              ))}
              {[...Array(31)].map((_, i) => {
                const date = `2024-07-${String(i + 1).padStart(2, "0")}`;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(date)}
                    className={
                      `w-10 h-10 rounded-full flex items-center justify-center text-sm",
                      ${selectedDate === date}
                        ? "bg-green-200 text-green-900 font-semibold"
                        : "hover:bg-gray-200`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>*/}
          </div> 
          {/* Selected Day */}
          <div className="mt-6">
            <h2 className="text-xl font-bold my-4 ">Selected Day</h2>
            
            <ul className="flex flex-col gap-4">
              {bookings.map((b, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src={b.image} alt={b.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-medium">{b.name}</p>
                      <p className="text-sm text-[#5d895d]">{b.service}</p>
                    </div>
                  </div>
                  <p className="text-md text-gray-600 whitespace-nowrap">{b.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
    )
}

export default Bookings