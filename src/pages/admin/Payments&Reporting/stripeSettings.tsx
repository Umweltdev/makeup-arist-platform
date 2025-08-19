

const StripeSettings=()=>{
    return(
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Stripe Integration</h2>
            <p className="text-sm text-gray-600">Connected with Stripe API. No further action required unless changing accounts.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Issue Refund</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Refund submitted (mock)")
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-1">Transaction ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="e.g., #001"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Refund Amount</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="e.g., 100"
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Submit Refund
              </button>
            </form>
          </div>
        </div>
    )
}

export default StripeSettings