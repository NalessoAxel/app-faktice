import { Flex } from '@chakra-ui/react';

import Image from 'next/image';

import Col from '_comps/GridSystem/Col';
import Container from '_comps/GridSystem/Container';

function NavBar() {
	return (
		<Container bgColor="body" minH="137px" zIndex="5" position="absolute">
			<Col colStart={[4]} colEnd={[2]} zIndex="5" position="absolute">
				<Flex justifyContent="center" align="center" h="100%">
					<Image src="/images/logo.png" alt="Faktice Label" width={200} height={137} />
				</Flex>
			</Col>

			{/* <Col colStart={2} colEnd={8} borderRight="1px solid #707070">
				<Box />
			</Col>

			<Col colStart={8} colEnd={14} borderRight="1px solid #707070">
				<Box />
			</Col>

			<Col colStart={14} colEnd={20} borderRight="1px solid #707070">
				<Box />
			</Col> */}

			{/* <Col colStart={26} colEnd={27} borderLeft="1px solid #707070">
				<Flex justifyContent="center" align="center" h="100%" w="100%">
					<Image src="/images/logo.png" alt="Faktice Label" width={200} height={137} />
				</Flex>
			</Col> */}
		</Container>
	);
}

export default NavBar;
