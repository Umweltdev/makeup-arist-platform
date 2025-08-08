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
