import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsBriefcase, BsChatSquareDots } from 'react-icons/bs';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { NavLink, Outlet } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
            <nav className='fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50'>
                <div className='py-1 px-3 mx-auto'>
                    <div className='w-full bg-stone-800/20 h-[4.5rem] backdrop-blur-2xl rounded-full max-w-[460px] 
                    mx-auto px-5 flex justify-between items-center text-2x1 text-white'>
                        <NavLink
                            className='w-[60px] h-[60px] flex items-center justify-center'
                            to={'/'}
                        >
                            <BiHomeAlt />
                        </NavLink>
                        <NavLink
                            className='w-[60px] h-[60px] flex items-center justify-center'
                            to={'/about'}
                        >
                            <BiUser />
                        </NavLink>
                        <NavLink
                            className='w-[60px] h-[60px] flex items-center justify-center'
                            to={'/work'}
                        >
                            <BsBriefcase />
                        </NavLink>
                        <NavLink
                            className='w-[60px] h-[60px] flex items-center justify-center'
                            to={'/blog'}
                        >
                            <HiOutlinePencilAlt />
                        </NavLink>
                        <NavLink
                            className='w-[60px] h-[60px] flex items-center justify-center'
                            to={'https://calendly.com/brittany-villegas/30min'}
                            target='_blank'
                        >
                            <BsChatSquareDots />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;