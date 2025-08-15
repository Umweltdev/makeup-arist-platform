import InquiryCard from "./components/inquiryCard"

const inquiriesMock = [
  {
    id: 1,
    clientName: 'Jane Doe',
    eventType: 'Wedding',
    date: '2025-09-10',
    status: 'New',
    messagePreview: 'Hi, I’m interested in bridal makeup...',
    unread: true,
  },
  {
    id: 2,
    clientName: 'Sara Kim',
    eventType: 'Photoshoot',
    date: '2025-10-01',
    status: 'In Progress',
    messagePreview: 'Can you work with oily skin?',
    unread: false,
  },
]

const Inquiry=()=>{
    return(
       <div className="">
        <h1 className="text-3xl font-bold mb-4 text-green-600">Inquiry & Communications</h1>
        {inquiriesMock.map((item, index)=>(
            <InquiryCard
                key={index}
                clientName={item.clientName}
                createdAt={item.date}
                description={item.messagePreview}
                serviceType={item.eventType}
                status={item.status}
                onClick={()=>{}}
                onEdit={()=>{}}
                

            />
        ))}

       </div>
    )
}

export default Inquiry