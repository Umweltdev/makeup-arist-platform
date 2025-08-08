import {
    BrowserRouter as Router,
    Route,
    Routes,
    Outlet,
} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import About from "./pages/About"
import ContactPage from "./pages/ContactPage"
import PortfolioPage from "./pages/PortfolioPage"
import ServicesPage from "./pages/ServicesPage"
import ClientInquiryPage from "./pages/ClientInquiryPage"
import Dashboard from "./pages/Dashboard"
import AdminDashboard from "./pages/admin/Dashboard"
import { Layout } from "./components"
import Clients from "./pages/admin/Clients"
import Services from "./pages/admin/Services"
import Payments from "./pages/admin/Payments"
import Availability from "./pages/admin/Availability"
import Bookings from "./pages/admin/Bookings"
import ServiceDetailPage from "./pages/ServiceDetailPage.tsx"

function App() {
    const AdminRoutes: React.FC = () => {
        return (
            <Layout>
                <Outlet />
            </Layout>
        )
    }
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/client-inquiry" element={<ClientInquiryPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                    path="/services/:category/:slug"
                    element={<ServiceDetailPage />}
                />
                <Route element={<AdminRoutes />}>
                    <Route
                        path="/admin/dashboard"
                        element={<AdminDashboard />}
                    />
                    <Route path="/admin/clients" element={<Clients />} />
                    <Route path="/admin/services" element={<Services />} />
                    <Route path="/admin/payments" element={<Payments />} />
                    <Route
                        path="/admin/availability"
                        element={<Availability />}
                    />
                    <Route path="/admin/bookings" element={<Bookings />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
