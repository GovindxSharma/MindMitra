import { Button } from "./ui/button"

const Forgot: React.FC = () => {
  
    return(
      <div className="flex gap-2  flex-col items-center justify-center h-screen"> 
      <div className="bg-white/20 border w-100 mb-20 rounded-lg p-8">
      <h1 className="text-lg text-center mb-4">Forgot Password?</h1>
     
     
      <div className="flex flex-col gap-4">
      <span className="mr-2">Your Email: </span>
      <input type="email" 
      name="email"
      placeholder="your email"
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
   
   export default Forgot