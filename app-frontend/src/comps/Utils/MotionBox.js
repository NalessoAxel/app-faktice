import { Box, forwardRef } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const _MotionBox = forwardRef((props, ref) => {
	const { children = null, style, ...rest } = props;

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Box ref={ref} {...rest}>
			{children}
		</Box>
	);
});

const MotionBox = motion(_MotionBox);

export default MotionBox;
