import { SimpleGrid, Image, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function ReleaseGrid({ images }) {
	const rows = 1;
	const cols = 4;
	const gap = 0;
	const scaleFactor = 0.8;

	return (
		<SimpleGrid spacing={gap} templateColumns={`repeat(${cols}, auto)`} w="100%" h="100vh">
			<Flex>
				<Image
					src={images.data[0].attributes.release_cover.data[0].attributes.url}
					alt="Faktice Label"
					w="0"
					minW="100%"
					h="0"
					minH="100%"
					objectFit="cover"
					objectPosition="center left"
					filter="grayScale(80%)"
					transition=".35s linear"
					cursor="pointer"
					_hover={{ filter: 'grayScale(0%)', transition: '.6s linear', width: `calc(100vw * ${scaleFactor} / ${cols})`, height: `calc(100vh * ${scaleFactor} / ${rows})` }}
				/>
				;
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
					objectPosition="center left"
					filter="grayScale(80%)"
					transition=".35s linear"
					cursor="pointer"
					_hover={{ filter: 'grayScale(0%)', transition: '.6s linear', width: `calc(100vw * ${scaleFactor} / ${cols})`, height: `calc(100vh * ${scaleFactor} / ${rows})` }}
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
					objectPosition="left"
					filter="grayScale(80%)"
					transition=".35s linear"
					cursor="pointer"
					_hover={{ filter: 'grayScale(0%)', transition: '.6s linear', width: `calc(100vw * ${scaleFactor} / ${cols})`, height: `calc(100vh * ${scaleFactor} / ${rows})` }}
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
					objectPosition="left"
					filter="grayScale(80%)"
					transition=".35s linear"
					cursor="pointer"
					_hover={{ filter: 'grayScale(0%)', transition: '.6s linear', width: `calc(100vw * ${scaleFactor} / ${cols})`, height: `calc(100vh * ${scaleFactor} / ${rows})` }}
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
