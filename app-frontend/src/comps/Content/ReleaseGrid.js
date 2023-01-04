import { useState } from 'react';
import { SimpleGrid, Image, Flex } from '@chakra-ui/react';

import Container from '_comps/GridSystem/Container';
import Col from '_comps/GridSystem/Col';

const ReleaseGrid = ({ images }) => {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	const releaseCover = images.data.map((image) => {
		return image.attributes.release_cover.data[0].attributes.url;
	});

	const rows = 1;
	const cols = 4;
	const gap = 0;
	const scaleFactor = 0.8;

	return (
		<>
			<SimpleGrid spacing={gap} templateColumns={`repeat(${cols}, auto)`} w="100%" h="100%">
				<Flex onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<Image
						src={releaseCover[0]}
						alt="Faktice Label"
						w={isHovering ? `calc(100vw * ${scaleFactor} / ${cols})` : '0'}
						minW="100%"
						h={isHovering ? `calc(100% * ${scaleFactor} / ${rows})` : '0'}
						minH="100%"
						objectFit="cover"
						filter={isHovering ? 'grayScale(0%)' : 'grayScale(80%)'}
						transition={isHovering ? '0.8s ease-in-out' : '0.35s linear'}
						cursor="pointer"
					/>
				</Flex>
			</SimpleGrid>
		</>
	);
};

export default ReleaseGrid;
