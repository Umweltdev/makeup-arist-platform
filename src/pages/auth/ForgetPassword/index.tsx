import { Button, Modal} from "@/components/index"
import { useState, FormEvent  } from "react"

const ForgetPassword = ({ onClose, setSignupModal }: { onClose: () => void, setSignupModal:(val:boolean)=>void }) => {
    const [email, setEmail]= useState("");

    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault();
        
    }
    
    return (
        <Modal onClose={onClose}  >
            
            <div className="max-w-2xl text-center mb-12 pt-4 flex justify-center flex-col mx-auto">
                <h1 className=" font-semibold text-[32px] leading-[40px] md:text-[42.4px] md:leading-[50px] text-[#3F6C54]">
                    Reset Password
                </h1>
                <p className="font-dmSans font-bold text-[16px] leading-[24px] md:text-[19.3339px] md:leading-[150%] text-[#2D3142] my-4">
                    Enter your account E-mail to set a new password
                </p>
                <form className="bg-white rounded-[32px] shadow-md p-6 md:p-8 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e:FormEvent<HTMLInputElement>)=>setEmail(e.currentTarget.value)}
                            required
                            className="w-full bg-[#e7f3e7] border border-gray-300 rounded-[23px] px-4 py-3 text-sm md:text-base font-dmSans"
                        />
                    </div>
                    
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full text"
                    >
                       Send Link
                    </Button>
                </form>
                
                
                <div className="mt-6 text-sm md:text-base font-dmSans text-[#2D3142]">
                    Don't have an account?{" "}
                    <button
                        
                        className="text-[#668974] font-semibold hover:underline cursor-pointer"
                        onClick={()=>{onClose(); setSignupModal(true)}}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default ForgetPassword
