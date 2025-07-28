import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import Modal from '../';

type ServiceId = 'bridal' | 'special' | 'editorial';

interface Service {
  id: ServiceId;
  title: string;
  price: string;
  description: string;
}

interface ClientDetails {
  name: string;
  email: string;
  phone: string;
  location: string;
  glamStyle: string;
  skinTone: string;
  allergies: string;
}
const BookingModal = ({onClose, setOpenCheckout}:{onClose:()=>void, setOpenCheckout:()=>void}) => {
    // const [activeModal, setActiveModal] = useState<string | null>(null);
    const [bookingStep, setBookingStep] = useState<number>(1);
    const [selectedService, setSelectedService] = useState<Service|null>(null);
  const [selectedDate, setSelectedDate] = useState<number|null>(null);
  const [selectedTime, setSelectedTime] = useState<string|null>(null);
  const [clientDetails, setClientDetails] = useState<ClientDetails>({
    name: '', email: '', phone: '', location: '', 
    glamStyle: '', skinTone: '', allergies: ''
  });
const [selectedMonth, setSelectedMonth] = useState<string>('July 2024');

   const services: Record<ServiceId, Service> = {
    bridal: {
      id: 'bridal',
      title: 'Bridal Makeup',
      price: '$250',
      description: 'Includes consultation, trial session, and on-site makeup application on your wedding day.'
    },
    special: {
      id: 'special',
      title: 'Special Occasion Makeup',
      price: '$150',
      description: 'Perfect for proms, galas, and other special events.'
    },
    editorial: {
      id: 'editorial',
      title: 'Editorial Makeup',
      price: '$200',
      description: 'Makeup for professional photoshoots and creative projects.'
    }
  };
const calendarDays = Array.from({ length: 30 }, (_, i) => ({
    date: i + 1,
    available: i < 11 || i > 18,
    selected: i === 4
  }));
  const handleServiceSelection = (serviceId: ServiceId) => {
    setSelectedService(services[serviceId]);
    handleBookingNext();
  };

  const handleBookingNext = () => {
    if (bookingStep < 4) setBookingStep(bookingStep + 1);
  };

  const handleBookingBack = () => {
    if (bookingStep > 1) setBookingStep(bookingStep - 1);
  };

  const resetBooking = () => {
    setBookingStep(1);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setClientDetails({
      name: '',
      email: '',
      phone: '',
      location: '',
      glamStyle: '',
      skinTone: '',
      allergies: '',
    });
    onClose();
  };

    
    const renderStepIndicators = () => (
      <div className="flex justify-center mb-8">
        {[1, 2, 3, 4].map((step, index) => (
          <React.Fragment key={step}>
            <div className={`w-3 h-3 rounded-full ${
              bookingStep >= step ? 'bg-black' : 'bg-gray-300'
            }`} />
            {index < 3 && <div className={`w-12 h-0.5 mt-1.5 mx-1 ${
              bookingStep > step ? 'bg-black' : 'bg-gray-300'
            }`} />}
          </React.Fragment>
        ))}
      </div>
    );

    const renderStep = () => {
      switch (bookingStep) {
        case 1:
          return (
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Select a service</h2>
              <div className="space-y-4">
                <button
                  onClick={() => handleServiceSelection('bridal')}
                  className="w-full text-left p-6 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">Bridal Makeup</h3>
                      <p className="text-gray-600">For your special day</p>
                    </div>
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                  </div>
                </button>
                
                <button
                  onClick={() => handleServiceSelection('special')}
                  className="w-full text-left p-6 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">Special Event Makeup</h3>
                      <p className="text-gray-600">For parties, galas, and more</p>
                    </div>
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                  </div>
                </button>
                
                <button
                  onClick={() => handleServiceSelection('editorial')}
                  className="w-full text-left p-6 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">Editorial Makeup</h3>
                      <p className="text-gray-600">For photoshoots and publications</p>
                    </div>
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                  </div>
                </button>
                
                <button
                  className="w-full text-left p-6 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">Makeup Lesson</h3>
                      <p className="text-gray-600">Learn to apply makeup like a pro</p>
                    </div>
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                  </div>
                </button>
              </div>
            </div>
          );
        
        case 2:
          return (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Select Date & Time</h2>
              
              <div className="flex items-center justify-between mb-6">
                <ChevronLeft className="cursor-pointer" size={24} />
                <h3 className="text-lg font-semibold">{selectedMonth}</h3>
                <ChevronRight className="cursor-pointer" size={24} />
              </div>
              
              <div className="mb-8">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-gray-600 p-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <button
                      key={index}
                      onClick={() => day.available && setSelectedDate(day.date)}
                      disabled={!day.available}
                      className={`p-3 rounded-full text-center ${
                        day.selected ? 'bg-green-500 text-white' :
                        !day.available ? 'text-gray-300' :
                        selectedDate === day.date ? 'bg-green-500 text-white' :
                        'hover:bg-gray-100'
                      }`}
                    >
                      {day.date}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Select Time</h3>
                <select
                  value={selectedTime || ''}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>
              </div>
            </div>
          );
        
        case 3:
          return (
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Your Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={clientDetails.name}
                    onChange={(e) => setClientDetails({...clientDetails, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={clientDetails.email}
                    onChange={(e) => setClientDetails({...clientDetails, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={clientDetails.phone}
                    onChange={(e) => setClientDetails({...clientDetails, phone: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={clientDetails.location}
                    onChange={(e) => setClientDetails({...clientDetails, location: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Glam Style</label>
                  <select
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={clientDetails.glamStyle}
                    onChange={(e) => setClientDetails({...clientDetails, glamStyle: e.target.value})}
                  >
                    <option value="">Select glam style</option>
                    <option value="natural">Natural</option>
                    <option value="glam">Full Glam</option>
                    <option value="soft">Soft Glam</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Skin Tone</label>
                  <select
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={clientDetails.skinTone}
                    onChange={(e) => setClientDetails({...clientDetails, skinTone: e.target.value})}
                  >
                    <option value="">Select skin tone</option>
                    <option value="fair">Fair</option>
                    <option value="medium">Medium</option>
                    <option value="olive">Olive</option>
                    <option value="deep">Deep</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Allergies/Sensitivities</label>
                  <textarea
                    placeholder="List any allergies or sensitivities"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                    rows={3}
                    value={clientDetails.allergies}
                    onChange={(e) => setClientDetails({...clientDetails, allergies: e.target.value})}
                  />
                </div>
              </div>
            </div>
          );
        
        case 4:
          return (
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Summary & Checkout</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service</span>
                    <span className="font-medium">{selectedService?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date</span>
                    <span className="font-medium">July {selectedDate || 15}, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time</span>
                    <span className="font-medium">{selectedTime || '10:00 AM'}</span>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>{selectedService?.price || '$150'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={setOpenCheckout}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-medium"
              >
                Book Now
              </button>
            </div>
          );
        
        default:
          return null;
      }
    };

    return (
      <Modal onClose={resetBooking}>
        <div className="w-full max-w-2xl">
          {bookingStep < 4 && renderStepIndicators()}
          {renderStep()}
          {bookingStep > 1 && bookingStep < 4 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBookingBack}
                className="text-gray-600 hover:text-gray-800"
              >
                Back
              </button>
              {bookingStep < 3 && (
                <button
                  onClick={handleBookingNext}
                  className="bg-green-500 text-white px-8 py-2 rounded-lg hover:bg-green-600"
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </Modal>
    );
  };

  export default BookingModal;