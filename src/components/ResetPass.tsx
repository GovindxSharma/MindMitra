import { Button } from "./ui/button"

const Reset: React.FC = () => {
  
 return(
   <div className="flex gap-2  flex-col items-center justify-center h-screen"> 
   <div className="bg-white/20 border w-100 mb-20 rounded-lg p-8">
   <h1 className="text-lg text-center mb-4">Reset Password</h1>
  
  
   <div className="flex flex-col gap-4">
   <span className="mr-2">New Password: </span>
   <input type="password" 
   name="password"
   placeholder=" your new password"
   className="border p-2 px-4 rounded-full"
   />
   <span className="mr-2">Confirm New Password: </span>
   <input type="password" 
   name="password"
   placeholder="confirm password"
   className="border p-2 px-4 rounded-full"
   />
    <Button className="cursor-pointer" variant={"secondary"}>
        Submit
      </Button>
   </div>
   </div>
   </div>
 )
}

export default Reset

