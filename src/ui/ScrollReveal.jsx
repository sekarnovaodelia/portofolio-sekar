import { motion } from 'framer-motion';

export const ScrollReveal = ({ children, className = '', delay = 0, yOffset = 50, direction = 'up' }) => {
    const directionMap = {
        up: { y: yOffset, x: 0 },
        down: { y: -yOffset, x: 0 },
        left: { x: -yOffset, y: 0 },
        right: { x: yOffset, y: 0 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directionMap[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
