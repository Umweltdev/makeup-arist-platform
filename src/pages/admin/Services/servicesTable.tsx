

const ServicesTable=()=>{
    const services=[{name:"Bridal Makeup", category:"Bridal", duration:"90 min", basePrice:"$250", capacity:1, },{name:"Special Occasion Makeup", category:"Bridal", duration:"90 min", basePrice:"$250", capacity:1,}]
    return(
<div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full">
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
        </div>
    )
}

export default ServicesTable;