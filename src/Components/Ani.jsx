import { motion } from 'framer-motion';

const Ani = () => {
	return (
		<motion.div animate={{ x: 100, y: 100, rotate: 360 }}>
			<h1>Hello</h1>
		</motion.div>
	);
};

export default Ani;
