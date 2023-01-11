import { SimpleGrid, Image, Flex } from '@chakra-ui/react';

import Link from 'next/link';

import PropTypes from 'prop-types';

import Col from '_comps/GridSystem/Col';
import Container from '_comps/GridSystem/Container';

function ReleaseGrid({ images, loaderRef }) {
	console.log(images);
	const rows = 1;
	const cols = 4;
	const gap = 0;
	const scaleFactor = 0.8;

	// data[0].attributes.release_page.data.attributes.slug;
	// const slug = images.data.map((slugs) => slugs.attributes.release_page.data.attributes.artist);
	// console.log({ slug });
	const slugs = images.homePageImages.data.map((image) => image.attributes.release_page.data);
	console.log({ slugs });

	return (
		<Container minH="calc(100vh - 137px)" bgColor="body" borderTop="1px solid #707070" data-scroll-sectionr ref={loaderRef}>
			<Col colStart={2} colEnd={26}>
				<SimpleGrid spacing={gap} templateColumns={`repeat(${cols}, auto)`} w="100%" h="100vh">
					{images.homePageImages.data.map((image) => (
						<Flex key={`itterationCover${images.homePageImages.data.indexOf(image)}`}>
							<Link href={`/releases/${image.attributes.release_page.data.attributes.slug}`}>
								<Image
									src={image.attributes.release_cover.data[0].attributes.url}
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
									_hover={{
										filter: 'grayScale(0%)',
										transition: '.6s linear',
										width: `calc(100vw * ${scaleFactor} / ${cols})`,
										height: `calc(100vh * ${scaleFactor} / ${rows})`,
									}}
								/>
							</Link>
						</Flex>
					))}
				</SimpleGrid>
			</Col>
		</Container>
	);
}

ReleaseGrid.propTypes = {
	images: PropTypes.object.isRequired,
	loaderRef: PropTypes.object.isRequired,
};

export default ReleaseGrid;
