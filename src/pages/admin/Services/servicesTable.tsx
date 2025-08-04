import { User, } from "lucide-react"


const ServicesTable=()=>{
    const services=[{name:"Bridal Makeup", category:"Bridal", duration:"90 min", basePrice:"$250", capacity:1, },{name:"Special Occasion Makeup", category:"Bridal", duration:"90 min", basePrice:"$250", capacity:1,}]
    return(
<div className="bg-white rounded-lg shadow-sm overflow-x-auto ">
            <table className="w-full md:block hidden">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Category
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Duration
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Base Price
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Capacity
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {services.map((service, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {service.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                                {service.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                               
                                {service.duration}
                                
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                                {service.basePrice}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                               
                                    {service.capacity}
                                
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d] cursor-pointer">
                               
                                    Edit
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="block md:hidden">
                                        {services.map((service, index) => (
                                            <div key={index} className="flex space-x-3 justify-between items-center px-2 mb-4">
                                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                                    <User size={24} className="text-gray-600" />
                                                </div>
                                                     <div className="flex-1">
                                                        <h3 className="font-semibold">{service.name}</h3>
                                                        <h3 className="text-[14px]">{service.category}</h3>
                                                        <p className="text-sm text-gray-500">
                                                            {service.duration} 
                                                        </p>
                                                    </div>
                                                    <div className=""> 
                                                        <p className=" pb-2 whitespace-nowrap">
                                                            {service.basePrice}</p>
                                                    
                                                        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800`}>
                                                            {service.capacity}
                                                        </p>
                                                    
                                                    </div>
                                            </div> 
                                        ))}
                                    </div>
        </div>
    )
}

export default ServicesTable;