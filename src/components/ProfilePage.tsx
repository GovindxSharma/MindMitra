import "../styles/homesection.css"
import MindSpace from "./MindSpace"
import Profile from "./Profile"
import AppSidebar from "./Sidebar"


const ProfilePage = () => {


    return (
        <div className="homepage">
            <div className="mr-[-10px]">
                <AppSidebar />
            </div>

            <section className="feed">
                <Profile />
                
            </section>

            <MindSpace />
        </div>



    )
}

export default ProfilePage;