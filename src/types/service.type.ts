// types.ts
export interface Service {
  id: string
  title: string
  price: number
  nextAvailable: string
  duration: string
  images: string[]
  description: string
  category: "single" | "class" | "event"
  tags: string[]
}

export interface CreateServiceFormInput {
    serviceName: string
    description: string
    duration?: number
    basePrice?: number
    category?: string
    preparation?: string
    serviceType: string
    pricePerPerson?: number
    minParticipants?: number
    maxParticipants?: number
    materialsIncluded?: string
    skillLevel?: string
    classDate?: string

    // Event-specific
    eventType?: string
    packageDetails?: string
    teamSize?: number
    deposit?: number
    finalPayment?: string
    travelRadius?: string
    featured: false
}