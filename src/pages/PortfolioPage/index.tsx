import { useState } from "react";
import { X,  Camera } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import {Navbar} from "@/components/index";

const PortfolioPage=()=>{
    const navigate=useNavigate()

    const portfolioImages = [
    { id: 1, category: 'Bridal' },
    { id: 2, category: 'Fashion' },
    { id: 3, category: 'Fashion' },
    { id: 4, category: 'Bridal' },
    { id: 5, category: 'Fashion' },
    { id: 6, category: 'Fashion' }
  ];
  const [activePortfolioCategory, setActivePortfolioCategory] = useState('All');

    return(
              <div>
            <Navbar/>
<div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <X 
            className="cursor-pointer hover:text-gray-600" 
            size={28}
            onClick={() => navigate("/")} 
          />
        </div>
        
        <div className="flex space-x-6 mb-8">
          {['All', 'Bridal', 'Fashion'].map(category => (
            <button
              key={category}
              onClick={() => setActivePortfolioCategory(category)}
              className={`text-lg font-medium pb-2 cursor-pointer ${
                activePortfolioCategory === category 
                  ? 'text-green-500 border-b-2 border-green-500' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {portfolioImages
            .filter(img => activePortfolioCategory === 'All' || img.category === activePortfolioCategory)
            .map(image => (
              <div key={image.id} className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center">
                <Camera size={40} className="text-gray-400" />
              </div>
            ))}
        </div>
      </div>
    </div>
    </div>
    )
}

export default PortfolioPage;