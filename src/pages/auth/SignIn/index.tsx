import { Button, Modal, Input } from "@/components/index"
import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import useShowPassword from "@/utils/useShowPassword"

const SignIn = ({
    onClose,
    setSignupModal,
    setOpenForgetPassword,
}: {
    onClose: () => void
    setSignupModal: (val: boolean) => void
    setOpenForgetPassword: (val: boolean) => void
}) => {
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
            <div className="max-w-2xl text-center mb-12 pt-4 flex justify-center flex-col mx-auto">
                <h1 className=" font-semibold text-[28px] sm:text-[32px] leading-[32px] md:text-[40.4px] md:leading-[40px] text-[#3F6C54]">
                    Welcome Back
                </h1>
                <p className=" font-bold text-[16px] leading-[24px] md:text-[19.3339px] md:leading-[150%] text-[#2D3142] my-4">
                    Log in to access your dashboard.
                </p>
                <form
                    className="bg-white rounded-[32px] shadow-md px-4 py-6 md:p-8 w-full max-w-md mx-auto"
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
                            className="w-full bg-[#e7f3e7] border border-gray-300 rounded-[23px] px-4 py-3 text-sm md:text-base "
                        />
                    </div>
                    <div className="mb-4">
                        <Input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        suffixIcon={displayPasswordIcon()} 
                         onChange={(e: FormEvent<HTMLInputElement>) =>
                                setPassword(e.currentTarget.value)
                            }
                            required
                            className="w-full bg-[#e7f3e7] border border-gray-300 rounded-[23px] px-4 py-3 text-sm md:text-base"
                        />
                        {/* <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e: FormEvent<HTMLInputElement>) =>
                                setPassword(e.currentTarget.value)
                            }
                            required
                            className="w-full bg-[#e7f3e7] border border-gray-300 rounded-[23px] px-4 py-3 text-sm md:text-base font-dmSans"
                        /> */}
                    </div>
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full text"
                    >
                        Sign in
                    </Button>
                </form>
                <button
                    className="font-medium text-md text-center  underline text-[#668974] mt-4 cursor-pointer "
                    onClick={() => {
                        onClose()
                        setOpenForgetPassword(true)
                    }}
                >
                    Forget password?
                </button>

                <div className="mt-6 text-sm md:text-base font-dmSans text-[#2D3142]">
                    Don't have an account?{" "}
                    <button
                        className="text-[#668974] font-semibold hover:underline cursor-pointer"
                        onClick={() => {
                            onClose()
                            setSignupModal(true)
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default SignIn
