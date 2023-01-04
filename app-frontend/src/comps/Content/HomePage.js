import PropTypes from 'prop-types';

import Col from '_comps/GridSystem/Col';

import Container from '_comps/GridSystem/Container';

import ReleaseGrid from './ReleaseGrid';

function HomePage({ images }) {
	return (
		<Container minH="calc(100vh - 137px)" bgColor="body" borderTop="1px solid #707070">
			<Col colStart={2} colEnd={26} borderRight="1px solid #707070" borderLeft="1px solid #707070">
				<ReleaseGrid images={images} />
			</Col>
		</Container>
	);
}

HomePage.defaultProps = {
	images: {},
};

HomePage.propTypes = {
	images: PropTypes.object,
};

export default HomePage;
