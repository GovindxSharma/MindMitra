import { Link } from "react-router-dom"
import PostInteraction from "./PostInteraction"
import PostDropdown from "./Dropdown"

const Post = () => {




    return (
        <div className="relative mb-2 p-4 bg-[#1b262e] border-x-[1px] border-y-[1px] rounded-xl border-white ">
            

            {/*POST CONTENT*/}

            <div className="flex gap-4">
                                    {/*CONTENT*/}

                <div className="flex-1 flex flex-col ">
                    <div className="">
                    {/* TOP */}
                    <div className="flex items-center  justify-between ">
                        <div className="flex items-center flex-wrap">
                            {/*AVATAR*/}
                            <div className="flex">
                        <div className={` relative w-10 h-10 rounded-full overflow-hidden`}>
                                <img src="/linkedin.png" alt=""/>
                            </div>
                           <div className="flex-wrap mt-[-12px] ml-[-10px] gap-2 items-center flex">
                            <h1 className="text-md font-bold">User Name</h1>
                            <span className="text-textGray ml-[-18px]">@username</span>                    
                            </div>
                            </div>

                        </div>
                        <span className="mt-[-30px]"><PostDropdown/></span>
                        </div>
                    </div>
                    {/*TEXT & MEDIA*/}
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                        excepturi corrupti debitis exercitationem esse tempora vitae repellat
                        commodi veritatis repudiandae neque placeat quidem, optio rerum
                        voluptatum architecto! Sed, illo odio. 
                        </p>
                    <img src="general/post.jpeg" alt="" className="rounded-lg" />
                    

                    
                    <span className="text-sm mt-4 mb-1 text-gray-400  font-bold">12:58 PM · Apr 7, 2025</span>
                
                     <PostInteraction /> 
                </div>
            </div>
        </div>

    )
}

export default Post