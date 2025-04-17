
import { Link, Outlet } from 'react-router-dom'
import './rootLayout.css'
import { Button } from '@/components/ui/button';
import { MenuIcon, UserCircle2Icon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';

const RootLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="videoBackgroundWrapper">
            <video src='/bg1.mp4'
                autoPlay
                loop
                muted
                playsInline
                className="backgroundVideo"
            >
            
            </video>
            <div className="rootLayout">
                <header className="header">
                    <Link to="/" className="logo">
                        <span>MindMitra</span>
                    </Link>

                    {/* Hamburger Icon */}
                    <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <XIcon /> : <MenuIcon />}
                    </div>

                    {/* Nav Menu */}

                    <nav className={`sideNav ${menuOpen ? "open" : ""}`}>
                        <div className='sideItem'>
                            <Link className='sideOption' to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link className='sideOption' to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                        </div>
                        <Separator className='mt-auto' />
                        <span className='text-sm'>You can join us by:</span>
                        <Link to="/signin">
                        <Button className="sideButton" variant={"outline"} size={"lg"}>
                            <UserCircle2Icon />
                            <span>Sign in</span>
                        </Button>
                        </Link>
                    </nav>


                    {/* User Button */}
                    <div className="user">
                        <div className='navItems'>
                            <Link className='navOptions' to="/" >Home</Link>
                            <Link className='navOptions' to="/contact" >Contact</Link>
                        </div>
                        <Link to="/signin">
                        <Button  className="sideButton" variant={"outline"} size={"lg"}>
                            <UserCircle2Icon />
                            <span>Sign in</span>
                        </Button>
                        </Link>
                    </div>
                </header>

                <main>
                    <Outlet />
                </main>
            </div>
        </div>


    )
}

export default RootLayout;