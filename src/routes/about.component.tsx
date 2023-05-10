import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';
import AboutMePic from '../assets/about-me-pic.png';


const About = () => {
    const [ref] = useInView({
        threshold: 0.5,
    });
    return (
        <section className="container pb-24" ref={ref}>
             <div className="mx-auto flex flex-col lg:flex-row lg:justify-center items-center max-w-2/5">
                <motion.img 
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3 }}
                    src={AboutMePic} 
                    className='pb-8 lg:w-2/5' />
                <motion.div
                    variants={fadeIn('left', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3 }}
                    className='px-8 lg:px-0 lg:w-2/4'>
                    <h2 className='h2 font-bold'>About Me</h2>
                    <h3 className='font-tertiary font-semibold pb-2'>
                        I'm a full-stack Javascript developer with over two years of experience.
                    </h3>
                    <p className='font-tertiary text-[1rem] pb-4'>
                        I am originally from Dallas, Texas but I live in Stockholm, Sweden. 
                        I have a Bachelors degree in Journalism with a focus in Strategic Communications and PR. 
                        In 2020, I began teaching myself Javascript, and have since worked as an ABAP developer at H&M from 2021 to 2022 and have also completed a full-stack Javascript development bootcamp in 2023.
                    </p>
                    <div className='flex max-w-max gap-x-6 items-center mx-auto lg:mx-0 py-3'>
                        <a href="https://www.canva.com/design/DAFdZSgm7Ok/MqSt30btCSHN41tdFuqtug/edit?utm_content=DAFdZSgm7Ok&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank"><button className='btn btn-sm lg:btn-lg'>View CV</button></a>
                        <a href='/blog' className='font-semibold text-gradient text-[.875rem] lg:text-[1.125rem]'>Read My Blog</a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About;