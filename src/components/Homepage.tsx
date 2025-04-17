import "../styles/homesection.css"
import MindSpace from "./MindSpace"
import Post from "./Post"
import PostShare from "./PostShare"
import AppSidebar from "./Sidebar"


const Homepage = () => {

        const handlePostSubmit = (content: string) => {
          console.log('New post:', content);
          // Add your API call here
        };

    return (
        <div className="homepage">
          <div className="mr-[-10px]">
        <AppSidebar/>
        </div>
      
        <section className="feed">
          <PostShare onPostSubmit={handlePostSubmit} />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
    
        <MindSpace/>
        </div>



    )
}

export default Homepage