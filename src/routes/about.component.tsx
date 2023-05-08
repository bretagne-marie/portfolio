import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

const About = () => {
    const [ref, inView ] = useInView({
        threshold: 0.5,
    });
    return (
        <section className="section h-screen" ref={ref}>
            <h1>This is the About section</h1>
        </section>
    )
}

export default About;