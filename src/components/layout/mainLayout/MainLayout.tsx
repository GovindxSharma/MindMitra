
import { Link, Outlet } from 'react-router-dom'
import './mainLayout.css'
import { Button } from '@/components/ui/button';
import { MenuIcon, UserCircle2Icon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';

const MainLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <div className="mainLayout">
            <div className="bg-[#232020] sticky z-50  top-0 h-20 mt-[-20px]">
            <header className="mainHeader">
                <Link to="/" className="logo">
                    <span >MindMitra</span>
                </Link>


                {/* Hamburger Icon */}
                <div className="menusIcon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <XIcon /> : <MenuIcon />}
                </div>

                {/* Nav Menu */}

                <nav className={`mainsideNav ${menuOpen ? "open" : ""}`}>
                    <div className='mainsideItem'>
                        <Link className='mainsideOption' to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link className='mainsideOption' to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </div>
                    <Separator className='mt-auto' />
                    <span className='text-sm'>You can join us by:</span>
                    <Link to="/signin">
                        <Button className="mainsideButton" variant={"outline"} size={"lg"}>
                            <UserCircle2Icon />
                            <span>Sign in</span>
                        </Button>
                    </Link>
                </nav>


                
                <div className="mainuser">
                    <div className='mainnavItems'>
                        <Link className='mainnavOptions' to="/" >Home </Link>
                        <Link className='mainnavOptions' to="/contact" >Contact </Link>
                    </div>
                    <Link to="">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                </div>
            </header>
            </div>
            <main>
            <Outlet/>
            </main>
        </div>


    )
}

export default MainLayout;