import { Link } from "react-router-dom"
import "../styles/homepage.css"
import { TypeAnimation } from 'react-type-animation'


const LandingPage = () => {
   
    return (
        <div className="homepage">
            <div className="left">
                <h1>MINDMITRA</h1>
                <div className="chat">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Your Mental Health Matters...',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                '',
                                1000,
                                '',
                                1000,
                                '',
                                1000
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                        />
                    </div>
                <div className="flex gap-4">
                <Link to="/signup" className='link'>Get Started</Link>
                <Link to="/about" className='link'>Why MindMitra?</Link>
                </div>
            </div>
            <div className="right">

                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/braini.png" alt="" className='brain' />
                </div>
            </div>
            </div>

    )
}

export default LandingPage