import React, { useState } from "react"
//import { FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa"
import { Trash, ArrowUp, ArrowDown } from "lucide-react"
const MAX_PORTFOLIO_IMAGES = 12

const ContentManagement = () => {
  const [carouselImages, setCarouselImages] = useState<File[]>([])
  const [portfolioImages, setPortfolioImages] = useState<{
    file: File
    category: string
    metadata: string
  }[]>([])

  // === CAROUSEL HANDLERS ===
  const handleCarouselUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setCarouselImages([...carouselImages, ...Array.from(e.target.files)])
  }

  const handleCarouselDelete = (index: number) => {
    const updated = [...carouselImages]
    updated.splice(index, 1)
    setCarouselImages(updated)
  }

  const moveCarouselImage = (index: number, direction: "up" | "down") => {
    const updated = [...carouselImages]
    const swapIndex = direction === "up" ? index - 1 : index + 1
    if (swapIndex < 0 || swapIndex >= updated.length) return
    ;[updated[index], updated[swapIndex]] = [updated[swapIndex], updated[index]]
    setCarouselImages(updated)
  }

  // === PORTFOLIO HANDLERS ===
  const handlePortfolioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const newFiles = Array.from(e.target.files).slice(0, MAX_PORTFOLIO_IMAGES - portfolioImages.length)
    const formatted = newFiles.map((file) => ({ file, category: "", metadata: "" }))
    setPortfolioImages([...portfolioImages, ...formatted])
  }

  const updatePortfolioField = (index: number, field: "category" | "metadata", value: string) => {
    const updated = [...portfolioImages]
    updated[index][field] = value
    setPortfolioImages(updated)
  }

  const handlePortfolioDelete = (index: number) => {
    const updated = [...portfolioImages]
    updated.splice(index, 1)
    setPortfolioImages(updated)
  }

  const movePortfolioImage = (index: number, direction: "up" | "down") => {
    const updated = [...portfolioImages]
    const swapIndex = direction === "up" ? index - 1 : index + 1
    if (swapIndex < 0 || swapIndex >= updated.length) return
    ;[updated[index], updated[swapIndex]] = [updated[swapIndex], updated[index]]
    setPortfolioImages(updated)
  }

  return (
    <div className=" p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-600">Content Management</h1>

      {/* === Carousel Section === */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Carousel Images</h2>
        <input type="file" accept="image/*" multiple onChange={handleCarouselUpload} />
        <ul className="mt-4 space-y-2">
          {carouselImages.map((file, index) => (
            <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
              <span>{file.name}</span>
              <div className="space-x-2">
                <button onClick={() => moveCarouselImage(index, "up")}>
                     <ArrowUp /> 
                
                    </button>
                <button onClick={() => moveCarouselImage(index, "down")}>
                 <ArrowDown /> 
                    </button>
                
                <button onClick={() => handleCarouselDelete(index)}>
                    <Trash className="text-red-500" /> 
                    
                    </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* === Portfolio Section === */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Portfolio Images</h2>
        <p className="text-sm text-gray-500 mb-2">Max {MAX_PORTFOLIO_IMAGES} images</p>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handlePortfolioUpload}
          disabled={portfolioImages.length >= MAX_PORTFOLIO_IMAGES}
        />
        <ul className="mt-4 space-y-4">
          {portfolioImages.map((img, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded">
              <p className="font-medium mb-2">{img.file.name}</p>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Category (e.g. Bridal, Natural...)"
                  className="w-full px-3 py-2 border rounded"
                  value={img.category}
                  onChange={(e) => updatePortfolioField(index, "category", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Image metadata or description"
                  className="w-full px-3 py-2 border rounded"
                  value={img.metadata}
                  onChange={(e) => updatePortfolioField(index, "metadata", e.target.value)}
                />
                <div className="flex space-x-2">
                  <button onClick={() => movePortfolioImage(index, "up")}>
                     <ArrowUp /> 
                    
                    </button>
                  <button onClick={() => movePortfolioImage(index, "down")}>
                     <ArrowDown /> 
                    
                    </button>
                  <button onClick={() => handlePortfolioDelete(index)}>
                    <Trash className="text-red-500" /> 
                    
                    </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ContentManagement
