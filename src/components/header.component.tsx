import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className='py-8 px-8'>
            <div className='flex items-center justify-between'>
                    <a href='/'>
                        <img src={Logo} alt="logo" className='w-14 lg:w-20 self-end'/>
                    </a>
                   <a href="/contact">
                    <button className='btn btn-sm lg:btn-lg'>
                        Work With Me
                    </button>
                    </a>
            </div>
        </header>
    )
}

export default Header;