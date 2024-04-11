import React from 'react';
import { motion } from 'framer-motion';

const pathVariants = {
    initial: { rotate: 0 },
    animate: {
        rotate: [0, 10, 0, -10, 0],
        y: [0, -10, 0, 10, 0],
        transition: {
            duration: 2, // Adjust the duration as needed
            repeat: Infinity, // Repeat the animation indefinitely
            ease: "easeInOut", // Adjust the easing function as needed
        },
    },
};

const SvgComponent: React.FC = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", bottom: 0 }}
            width="2458"
            height="852"
            viewBox="0 0 2458 852"
        >
            <motion.g transform="translate(0.000000, -769.000000)">
                <motion.g transform="translate(-310.486588, 723.775614)">
                    <motion.path
                        variants={pathVariants} // Apply the pathVariants animation
                        initial="initial"
                        animate="animate"
                        d="M2677.83039,209.459938 C2220.42324,-69.3699753 1739.48982,8.52109857 1235.03014,443.133159 C257.6328,342.883066 -47.6642462,419.430485 319.139001,672.775416 C685.942249,926.120347 1256.61062,952.640753 2031.14412,752.336633 C2919.67545,669.248749 3135.23754,488.289851 2677.83039,209.459938 Z"
                        strokeOpacity="0.450475306"
                        stroke="#D7ABCF"
                        fillOpacity="0.4"
                        fill="#D7ABCF"
                    />
                    <motion.path
                        variants={pathVariants} // Apply the pathVariants animation
                        initial="initial"
                        animate="animate"
                        d="M2478.32919,147.173056 C2118.76811,388.743894 1413.98866,499.512877 363.990863,479.480005 C72.1684176,469.818209 109.589596,591.602677 476.254399,844.833408 C842.919201,1098.06414 1510.27746,1056.53875 2478.32919,720.257226 C2837.89027,96.6302749 2837.89027,-94.3977817 2478.32919,147.173056 Z"
                        strokeOpacity="0.450475306"
                        stroke="#D7ABCF"
                        fillOpacity="0.4"
                        fill="#D7ABCF"
                    />
                    <motion.path
                        variants={pathVariants} // Apply the pathVariants animation
                        initial="initial"
                        animate="animate"
                        d="M397.358018,60.5583588 C762.863247,52.7252642 814.999926,419.782453 1236.41841,545.041436 C1676.64707,675.891404 1734.48997,656.447244 2101.53784,545.041436 C2533.4178,413.957894 2763.03813,232.277415 2790.39882,0 L3153,737.970955 C2688.88124,933.953318 2279.1735,1038.74869 1923.8768,1052.35708 C1568.58009,1065.96546 1094.1272,995.03474 500.518121,839.564906 C-130.470707,332.275973 -164.857407,72.607124 397.358018,60.5583588 Z"
                        stroke="#16AEBD"
                        fill="#16AEBD"
                    />
                </motion.g>
            </motion.g>
        </motion.svg>
    );
};

export default SvgComponent;