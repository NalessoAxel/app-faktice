import { Heading, Flex, Image } from '@chakra-ui/react';

import PropTypes from 'prop-types';

import Col from '_comps/GridSystem/Col';
import Container from '_comps/GridSystem/Container';

function Header({ releases }) {
	return (
		<Container bgColor="body" minH="100vh" data-scroll-section>
			{releases.releasePages.data.map((release) => (
				<>
					<Col colStart={4} colEnd={24} key={release.id}>
						<Flex justify="space-between" pt="6rem">
							<Heading as="h2" variant="h2">
								{release.attributes.artist}
							</Heading>

							<Heading as="h2" variant="h2">
								{release.attributes.cat_number}
							</Heading>
						</Flex>
					</Col>

					<Col colStart={4} colEnd={26}>
						<Heading as="h1" variant="h1">
							{release.attributes.release_title}
						</Heading>
					</Col>

					<Col start={2} end={26}>
						<Flex align="flex-end" h="100%">
							<Image src={release.attributes.release_cover.data[0].attributes.url} w="100%" h="437px" objectFit="cover" />
						</Flex>
					</Col>
				</>
			))}
		</Container>
	);
}

Header.propTypes = {
	releases: PropTypes.array.isRequired,
};

export default Header;
