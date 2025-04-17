import Card from "@/components/FeatureCard"
import "../styles/about.css"
import Card1 from "./featureCard1"
import Card2 from "./featureCard2"
import { Link } from "react-router-dom"


const About = () => {

    return (
        <div className="about relative">
            <div className="main bg-black/20 border">
                <h2 className="h1 "> Why MindMitra?</h2>
                <h4 className="text-center -mt-2 text-3xl"> “MindMitra is your digital companion for emotional well-being. <br /> From sharing your thoughts anonymously to tracking your
                    daily mood,<br /> and getting guidance from certified therapists —
                    <br /> MindMitra is built to help you heal, grow, and thrive.”

                </h4>
                <div className="card">
                    <Card1 />
                    <Card />
                    <Card2 />
                </div>
                <div className="">
                    <div className="flex gap-4">
                        <Link to="/signup" className='link'>Get Started</Link>
                    </div>
                    </div>
            </div>
        </div>

    )
}

export default About