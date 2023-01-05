import { useRef } from 'react';
import { Flex, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import Container from '_comps/GridSystem/Container';
import Col from '_comps/GridSystem/Col';

const getSectionHeight = (element) => {
	const { height } = element.getBoundingClientRect(); // getBoundingClientRect() returns the size of an element and its position relative to the viewport.
	const { childElementCount } = element; // childElementCount returns the number of child elements of an element.
	return height / childElementCount;
};

const Loader = () => {
	const countRef = useRef(null);
	const countRef2 = useRef(null);

	useEffect(() => {
		if (countRef.current) {
			const transformAmount = getSectionHeight(countRef.current);
		}
	}, []);

	return (
		<Container minH="calc(100vh - 137px)" bgColor="body" borderTop="1px solid #707070" data-scroll-section>
			<Col colStart={2} colEnd={26} borderRight="1px solid #707070" borderLeft="1px solid #707070">
				<Flex h="100%" align="center">
					<Flex>
						<Image src="/images/logo_big.png" alt="loader" w="900px" h="440px" />
					</Flex>

					<Flex>
						<Flex ref={countRef}>
							<UnorderedList>
								<ListItem>
									<Image src="/images/2.png" alt="number two" w="329px" h="329px" />
								</ListItem>

								<ListItem>
									<Image src="/images/4 4.png" alt="number two" w="329px" h="329px" />
								</ListItem>

								<ListItem>
									<Image src="/images/6.png" alt="number two" w="329px" h="329px" />
								</ListItem>

								<ListItem>
									<Image src="/images/9.png" alt="number two" w="329px" h="329px" />
								</ListItem>
							</UnorderedList>
						</Flex>

						<Flex ref={countRef2}>
							<UnorderedList>
								<ListItem>
									<Image src="/images/3.png" alt="number two" w="329px" h="329px" />
								</ListItem>

								<ListItem>
									<Image src="/images/4 4.png" alt="number two" w="329px" h="329px" />
								</ListItem>

								<ListItem>
									<Image src="/images/8.png" alt="number two" w="329px" h="329px" />
								</ListItem>

								<ListItem>
									<Image src="/images/9.png" alt="number two" w="329px" h="329px" />
								</ListItem>
							</UnorderedList>
						</Flex>
					</Flex>
				</Flex>
			</Col>
		</Container>
	);
};

export default Loader;
