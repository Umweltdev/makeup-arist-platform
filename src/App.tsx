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
import Availability from "./pages/admin/Availability"
import Bookings from "./pages/admin/Bookings"
import ServiceDetailPage from "./pages/ServiceDetailPage.tsx"
import SignIn from "./pages/SignIn/index.tsx"
import Inquiry from "./pages/admin/Inquiry&Communications/index.tsx"
import PaymentsReporting from "./pages/admin/Payments&Reporting/index.tsx"
import ContentManagement from "./pages/admin/ContentManagement/index.tsx"
import SignUp from "./pages/Signup/index.tsx"

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
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route element={<AdminRoutes />}>
                    <Route
                        path="/admin/dashboard"
                        element={<AdminDashboard />}
                    />
                    <Route path="/admin/clients" element={<Clients />} />
                    <Route path="/admin/services" element={<Services />} />
                    <Route
                        path="/admin/availability"
                        element={<Availability />}
                    />
                    <Route path="/admin/bookings" element={<Bookings />} />
                    <Route path="/admin/inquiry" element={<Inquiry />} />
                    <Route path="/admin/payments&reporting" element={<PaymentsReporting />} />
                    <Route path="/admin/content-management" element={<ContentManagement />} />
                    
                </Route>
            </Routes>
        </Router>
    )
}

export default App
