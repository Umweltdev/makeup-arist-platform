import { X, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {Navbar} from "@/components/index";

const ContactPage=()=>{
     const navigate=useNavigate()
    return(
              <div>
            <Navbar/>
        <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Contact</h1>
          <X 
            className="cursor-pointer hover:text-gray-600" 
            size={28}
            onClick={() => navigate('/')} 
          />
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Mail className="text-gray-600" size={24} />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">makeupartist@email.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Phone className="text-gray-600" size={24} />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              {/* <Instagram className="text-gray-600" size={24} /> */}
              <div>
                <p className="font-semibold">Instagram</p>
                <p className="text-gray-600">@makeupartist</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              {/* <Facebook className="text-gray-600" size={24} /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <div>
                <p className="font-semibold">Facebook</p>
                <p className="text-gray-600">@makeupartist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default ContactPage;