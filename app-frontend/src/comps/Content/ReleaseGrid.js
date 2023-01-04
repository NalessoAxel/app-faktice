import { SimpleGrid, Image, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function ReleaseGrid({ images }) {
	console.log(images);
	const [isHovering, setIsHovering] = useState(false);

	const rows = 1;
	const cols = 4;
	const gap = 0;
	const scaleFactor = 0.8;

	return (
		<SimpleGrid spacing={gap} templateColumns={`repeat(${cols}, auto)`} w="100%" h="100%">
			<Flex>
				<Image
					src={images.data[0].attributes.release_cover.data[0].attributes.url}
					alt="Faktice Label"
					w="0"
					minW="100%"
					h="0"
					minH="100%"
					objectFit="cover"
					filter="grayScale(80%)"
					transition={isHovering ? '0.8s ease-in-out' : '0.35s linear'}
					cursor="pointer"
					_hover={{ filter: 'grayScale(0%)', width: `calc(100vw * ${scaleFactor} / ${cols})`, height: `calc(100% * ${scaleFactor} / ${rows})` }}
				/>
			</Flex>
			<Flex>
				<Image
					src={images.data[1].attributes.release_cover.data[0].attributes.url}
					alt="Faktice Label"
					w="0"
					minW="100%"
					h="0"
					minH="100%"
					objectFit="cover"
					filter="grayScale(80%)"
					transition={isHovering ? '0.8s ease-in-out' : '0.35s linear'}
					cursor="pointer"
					_hover={{ filter: 'grayScale(0%)', width: `calc(100vw * ${scaleFactor} / ${cols})`, height: `calc(100% * ${scaleFactor} / ${rows})` }}
				/>
			</Flex>

			<Flex>
				<Image
					src={images.data[2].attributes.release_cover.data[0].attributes.url}
					alt="Faktice Label"
					w="0"
					minW="100%"
					h="0"
					minH="100%"
					objectFit="cover"
					filter="grayScale(80%)"
					transition={isHovering ? '0.8s ease-in-out' : '0.35s linear'}
					cursor="pointer"
					_hover={{ filter: 'grayScale(0%)', width: `calc(100vw * ${scaleFactor} / ${cols})`, height: `calc(100% * ${scaleFactor} / ${rows})` }}
				/>
			</Flex>
			<Flex>
				<Image
					src={images.data[3].attributes.release_cover.data[0].attributes.url}
					alt="Faktice Label"
					w="0"
					minW="100%"
					h="0"
					minH="100%"
					objectFit="cover"
					filter="grayScale(80%)"
					transition={isHovering ? '0.8s ease-in-out' : '0.35s linear'}
					cursor="pointer"
					_hover={{ filter: 'grayScale(0%)', width: `calc(100vw * ${scaleFactor} / ${cols})`, height: `calc(100% * ${scaleFactor} / ${rows})` }}
				/>
			</Flex>
		</SimpleGrid>
	);
}

ReleaseGrid.defaultProps = {
	images: {},
};

ReleaseGrid.propTypes = {
	images: PropTypes.object,
};

export default ReleaseGrid;
