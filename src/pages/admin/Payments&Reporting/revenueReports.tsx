

const RevenueReports=()=>{
    const revenueSummary = {
    total: 570,
    byService: {
      "Bridal Makeup": 250,
      "Event Makeup": 120,
      "Makeup Lesson": 200,
      },
  }

    return(
        <div>
          <h2 className="text-xl font-semibold mb-4">Revenue Reports</h2>
          <p className="mb-2">Total Revenue: <strong>${revenueSummary.total}</strong></p>
          <ul className="list-disc list-inside">
            {Object.entries(revenueSummary.byService).map(([service, amount]) => (
              <li key={service}>
                {service}: ${amount}
              </li>
            ))}
          </ul>
        </div>
    )
}

export default RevenueReports