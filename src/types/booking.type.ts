type BookingType = "single" | "class" | "event"
type BookingStatus = "pending" | "confirmed" | "completed" | "canceled"
type PaymentStatus = "paid" | "unpaid"

export interface Booking {
  id: string
  name: string
  service: string
  type: BookingType
  time: string            // "10:00 AM"
  date: string            // "2025-08-07"
  status: BookingStatus
  location: string
  paymentStatus: PaymentStatus
  image?: string
}