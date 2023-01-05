import { useRef, useEffect } from 'react';
import { Flex, Image, Box, List, ListItem, Heading } from '@chakra-ui/react';
import { timeline } from 'motion';
import Container from '_comps/GridSystem/Container';
import Col from '_comps/GridSystem/Col';
import ListAnimation from './ListAnimation';

function getSectionHeight(element) {
	console.log(element);
	const { height } = element.getBoundingClientRect();
	const { childElementCount } = element;
	console.log(height, childElementCount);
	return height / childElementCount;
}

const Loader = () => {
	const countRef = useRef(null);
	const countRef2 = useRef(null);

	// useEffect(() => {
	// 	if (countRef.current && countRef2.current) {
	// 		const transformAmount = getSectionHeight(countRef.current);
	// 		console.log(transformAmount);
	// 		const sequence = new Array(3).fill('').flatMap((_, index) => [
	// 			[countRef.current, { y: `-${transformAmount * (index + 1)}px` }],
	// 			[countRef2.current, { y: `-${transformAmount * (index + 1)}px` }, { at: '-1.8' }],
	// 		]);
	// 		timeline(sequence, {
	// 			defaultOptions: {
	// 				duration: 2,
	// 				easing: [0.77, 0, 0.175, 1],
	// 			},
	// 		});
	// 	}
	// }, []);

	// useEffect(() => {
	// 	const sequence2 = [
	// 		[countRef.current, { opacity: 0 }, { at: '<' }],
	// 		[countRef2.current, { opacity: 0 }, { at: '<' }],
	// 	];
	// 	timeline(sequence2, {
	// 		defaultOptions: {
	// 			duration: 1,
	// 			easing: [0.77, 0, 0.175, 1],
	// 		},
	// 	});
	// }, []);

	return (
		<Container minH="calc(100vh - 137px)" bgColor="body" borderTop="1px solid #707070" data-scroll-section overflow="hidden">
			<Col colStart={2} colEnd={26} borderRight="1px solid #707070" borderLeft="1px solid #707070">
				<Flex h="100%" align="center" justify="space-between">
					<Flex>
						<Image src="/images/logo_big.png" alt="loader" />
					</Flex>
					<ListAnimation />
				</Flex>
			</Col>
		</Container>
	);
};

export default Loader;
