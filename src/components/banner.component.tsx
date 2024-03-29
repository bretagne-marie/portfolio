import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import BannerPic from '../assets/banner-pic.png'

const Banner = () => {
    return (
        <section className='px-8 pb-20 mx-auto'>
            <div className='flex flex-col justify-around gap-y-6 lg:flex-row-reverse lg:items-center'>
                <motion.img
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.7 }}
                    src={BannerPic}
                    alt='picture of Brittany Villegas'
                    className='w-2/4 lg:w-1/3 self-center xl:w-2/5' />
                <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.7 }}
                    className='text-center lg:text-left'>
                    <div className='pt-6 pb-3'>
                        <h1 className='text-[2rem] font-bold uppercase leading-[0.8] mb-4 lg:text-[3rem]'>
                            Brittany <span>Villegas</span>
                        </h1>
                        <div className='text-[1.5rem] lg:text-[2.5rem] font-secondary font-semibold uppercase leading-[1]'>
                            <span className='text-white'>I am a </span>
                            <TypeAnimation sequence={[
                                'developer.',
                                2000,
                                'scrum master.',
                                2000,
                                'founder.',
                                2000,
                                'mother.',
                                2000,
                                'learner.',
                                2000,
                                'leader.',
                                2000,
                            ]}
                                speed={50}
                                className=''
                                wrapper='span'
                                repeat={Infinity} />
                        </div>
                    </div>
                    <div className='max-w-lg mx-auto lg:mx-0 font-tertiary py-3 text-[1rem] lg:text-[1.15rem]'>
                        <p>I'm a web developer and scrum master who is passionate about problem solving, interpersonal communications, strategic thinking, leading teams, empowering others, and building user-centric apps and services. </p>
                    </div>
                    <div className='flex max-w-max gap-x-6 items-center mx-auto lg:mx-0 py-3'>
                        <a href='https://calendly.com/brittany-villegas/30min' target='_blank'><button className='btn btn-sm lg:btn-lg'>Let's Meet</button></a>
                        <a href='/work' className='font-semibold text-gradient text-[.875rem] lg:text-[1.125rem]'>My Portfolio</a>
                    </div>
                    <div className='flex text-[1.5rem] py-3 gap-x-6 max-w-max mx-auto lg:mx-0 lg:text-[1.5rem]'>
                        <a href='https://github.com/bretagne-marie' target='_blank'>
                            <FaGithub />
                        </a>
                        <a href='https://www.linkedin.com/in/bmvillegas/' target='_blank'>
                            <FaLinkedin />
                        </a>
                        <a href='https://www.instagram.com/coding.for.immigrants/' target='_blank'>
                            <FaInstagram />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Banner;