import { animate, motion } from 'framer-motion';

const FramerMotion = () => {
	return (
		// <motion.div
		// 	animate={{
		// 		// scale: [0, 2, 0.2, 1],
		// 		x: [0, 1000, 500],
		// 		borderRadius: ['20%', '0%'],
		// 		scale: 5,
		// 	}}
		// 	transition={{ duration: 5 }}
		// 	className='w-[16rem] h-[16rem] bg-green-400 rounded-[50%]'
		// />
		<motion.button
			whileHover={{ scale: 5 }}
			transition={{ duration: 1 }}
			className='bg-green-500 px-4 py-2 rounded-md text-white font-bold'>
			Hello
		</motion.button>
	);
};

export default FramerMotion;
