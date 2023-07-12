import {motion, useSpring} from 'framer-motion'

function Motion({children, transformDefault = 0, dampingTransition = 200, stiffnessTransition = 1500, opacityTransition = 0, attrs}) {
    const springConfig = {
        damping: dampingTransition,
        stiffness: stiffnessTransition
    };
    const transform = useSpring(transformDefault, springConfig);
    const opacity = useSpring(opacityTransition, springConfig);

    return (
        <motion.div style={{opacity, y: transform}} {...attrs}>
            {children}
        </motion.div>
    )
}

export default Motion