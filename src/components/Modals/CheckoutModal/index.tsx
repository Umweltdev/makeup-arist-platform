import Modal from "../"

const CheckoutModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <Modal onClose={onClose}>
            <div className="w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-8 text-center">
                    Checkout
                </h2>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">
                        Order Summary
                    </h3>
                    <div className="space-y-3 pb-4 border-b">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Bridal Makeup</span>
                            <span>$250</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Travel Fee</span>
                            <span>$50</span>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 text-lg font-semibold">
                        <span>Total</span>
                        <span>$300</span>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">
                        Payment Method
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Card Number
                            </label>
                            <input
                                type="text"
                                placeholder="Enter card number"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    CVC
                                </label>
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Name on Card
                            </label>
                            <input
                                type="text"
                                placeholder="Enter name on card"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="save-card"
                                className="mr-2"
                            />
                            <label htmlFor="save-card" className="text-sm">
                                Save card details for future bookings
                            </label>
                        </div>
                    </div>
                </div>

                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-medium">
                    Pay $300
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                    By proceeding, you agree to our Terms of Service and Privacy
                    Policy.
                </p>
            </div>
        </Modal>
    )
}

export default CheckoutModal
