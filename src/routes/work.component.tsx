import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import underConstructionImg from '../assets/under-construction.png'

const Work = () => {
    return (
        <section className="section m-auto mx-3 pt-20 flex justify-center items-center">
            <motion.img
                variants={fadeIn('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                src={underConstructionImg}
                alt="under construction image"
                className='lg:w-2/4' />
        </section>
    )
}

export default Work;