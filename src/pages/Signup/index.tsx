import { Button, Navbar } from "@/components/index"
import { Link } from "react-router-dom"
import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        navigate("/admin/dashboard")
    }

    return (
        <div>
            <Navbar />
            <div className="max-w-2xl text-center mb-12 pt-24 md:pt-30 flex justify-center flex-col mx-auto">
                <h1 className=" font-semibold text-[32px] leading-[40px] md:text-[46.4px] md:leading-[56px]">
                    Create Your Account
        
                </h1>
                <p className="font-dmSans font-bold text-[16px] leading-[24px] md:text-[19.3339px] md:leading-[150%] text-[#2D3142] my-4">
                    Sign up to explore to access your dashboard.
                </p>
                <form
                    className="bg-white rounded-[32px] shadow-md p-6 md:p-8 w-full max-w-md mx-auto"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e: FormEvent<HTMLInputElement>) =>
                                setEmail(e.currentTarget.value)
                            }
                            required
                            className="w-full bg-[#e7f3e7] border border-gray-300 rounded-[23px] px-4 py-3 text-sm md:text-base font-dmSans"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e: FormEvent<HTMLInputElement>) =>
                                setPassword(e.currentTarget.value)
                            }
                            required
                            className="w-full bg-[#e7f3e7] border border-gray-300 rounded-[23px] px-4 py-3 text-sm md:text-base font-dmSans"
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full text"
                    >
                        Sign up
                    </Button>
                </form>

                <div className="mt-6 text-sm md:text-base text-[#2D3142]">
                    Already have an account?{" "}
                    <Link
                        to="/signin"
                        className="text-[#2A9D8F] font-semibold hover:underline text-green-600"
                    >
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
