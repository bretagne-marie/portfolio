import Logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header>
            <div className='py-8 px-8'>
                <div className='flex items-center justify-between'>
                    <a href='#'>
                        <img src={Logo} alt="logo" className='w-10'/>
                    </a>
                    <button className='btn btn-sm lg:btn-lg'>
                        Work With Me
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;