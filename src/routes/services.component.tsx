import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
    {
        key: 1,
        name: 'Servicenow Implementation & Development',
        description: "I'm a certified system administrator who specializes in ITSM and GRC implementation, advanced admin skills, and platform custimizations through scripting",
        link: 'https://www.linkedin.com/in/bmvillegas/',
    },
    {
        key: 2,
        name: 'Fullstack Web Development',
        description: 'I am also trained as a full-stack javscript developer who specializes in the MERN stack. I have also worked in OpenSQL and ABAP.',
        link: 'https://github.com/bretagne-marie',
    },
    {
        key: 3,
        name: 'Agile Project Management',
        description: 'I am a certified scrum master with a passion for strategic thinking and project planning, developing, execution, maintenance and monitoring.',
        link: 'https://www.linkedin.com/in/bmvillegas/',
    },
]

const Services = () => {
    return (
        <section className="section m-auto mx-3 pt-20 flex justify-center gap-[25px] flex-col lg:flex-row" id='services'>
            <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}
                className='px-8 lg:px-0 lg:w-1/4'>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='mb-8'>
                            <h2 className='h2 font-bold mb-8'>What I Do</h2>
                            <h3 className='font-tertiary font-semibold pb-2 mb-6'>
                                I'm a ServiceNow implementation specialist and platform developer, a full-stack Javascript web developer, and an agile project manager. 
                            </h3>
                            <a href='https://github.com/bretagne-marie'><button className='btn btn-sm lg:btn-lg'>View Github</button></a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3 }}
                    className='px-8 lg:px-0 lg:w-1/4 mb-[125px]'>
                    <div className='lg:mb-18'>
                            {services.map((service) => {
                                const { key, name, description, link } = service;
                                return ( 
                                    <div key={key} className='border-b border-black/40 flex mb-6'>
                                        <div>
                                            <h4 className='font-primary font-semibold pb-2 tracking-wider'>{name}</h4>
                                            <p className='font-tertiary text-[1rem] pb-4 leading-tight mb-4'>{description}</p>
                                        </div>
                                        <div>
                                            <a href={link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                </motion.div>
        </section>
    )
}

export default Services;