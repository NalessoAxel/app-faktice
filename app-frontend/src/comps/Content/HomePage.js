import Container from '_comps/GridSystem/Container';
import Col from '_comps/GridSystem/Col';
import ReleaseGrid from './ReleaseGrid';

const HomePage = ({ images }) => {
	return (
		<>
			<Container minH="calc(100vh - 137px)" bgColor="body" borderTop="1px solid #707070" data-scroll-section>
				<Col colStart={2} colEnd={26} borderRight="1px solid #707070" borderLeft="1px solid #707070">
					<ReleaseGrid images={images} />
				</Col>
			</Container>
		</>
	);
};

export default HomePage;
