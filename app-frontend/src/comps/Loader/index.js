import { Flex, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Col from '_comps/GridSystem/Col';
import Container from '_comps/GridSystem/Container';

import ListAnimation from './ListAnimation';

function Loader({ forwardedCounterRef, forwardedCounter2Ref, imageRef }) {
	return (
		<Container minH="100vh" bgColor="body" data-scroll-section overflow="hidden">
			<Col colStart={2} colEnd={26}>
				<Flex h="100%" align="center" justify="flex-end" w="100%" flexDir="column">
					<Flex ref={imageRef}>
						<Image src="/images/logo_big.png" alt="loader" w="900px" />
					</Flex>
					<ListAnimation forwardedCounterRef={forwardedCounterRef} forwardedCounter2Ref={forwardedCounter2Ref} />
				</Flex>
			</Col>
		</Container>
	);
}

Loader.defaultProps = {
	forwardedCounterRef: null,
	forwardedCounter2Ref: null,
};

Loader.propTypes = {
	forwardedCounterRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
	forwardedCounter2Ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
	imageRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]).isRequired,
};

export default Loader;
