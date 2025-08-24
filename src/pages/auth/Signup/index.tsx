import { Button, Modal, Input } from "@/components/index"
import useShowPassword from "@/utils/useShowPassword"
import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = ({ onClose, setSigninModal }: { onClose: () => void, setSigninModal:(val:boolean)=>void }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        navigate("/admin/dashboard")
    }

    const { showPassword, displayPasswordIcon } = useShowPassword()

    return (
        <Modal onClose={onClose}>
            {/* <Navbar /> */}
            <div className="max-w-2xl text-center mb-12 pt-4 flex justify-center flex-col mx-auto">
                <h1 className=" font-semibold text-[28px] sm:text-[32px] leading-[32px] md:text-[40.4px] md:leading-[40px] text-[#3F6C54]">
                    Create Your Account
                </h1>
                <p className=" font-bold text-[16px] leading-[24px] md:text-[19.3339px] md:leading-[150%] text-[#2D3142] my-4">
                    Sign up to explore to access your dashboard.
                </p>
                <form
                    className="bg-white rounded-[32px] shadow-md px-4 py-6 md:p-8 w-full sm:max-w-md mx-auto"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e: FormEvent<HTMLInputElement>) =>
                                setFirstName(e.currentTarget.value)
                            }
                            required
                            className="w-full bg-[#e7f3e7] border border-gray-300 rounded-[23px] px-4 py-3 text-sm md:text-base font-dmSans"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e: FormEvent<HTMLInputElement>) =>
                                setLastName(e.currentTarget.value)
                            }
                            required
                            className="w-full bg-[#e7f3e7] border border-gray-300 rounded-[23px] px-4 py-3 text-sm md:text-base font-dmSans"
                        />
                    </div>
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
                        <Input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e: FormEvent<HTMLInputElement>) =>
                                setPassword(e.currentTarget.value)
                            }
                            suffixIcon={displayPasswordIcon()} 
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
                    <button
                        
                        onClick={() => {onClose(); setSigninModal(true)}}
                        className="text-[#2A9D8F] font-semibold hover:underline text-[#668974] cursor-pointer"
                    >
                        Log In
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default SignUp
