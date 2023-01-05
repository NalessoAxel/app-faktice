import { useRef, useEffect } from 'react';
import { Flex, Image, List, ListItem } from '@chakra-ui/react';
import { timeline } from 'motion';

function getSectionHeight(element) {
	console.log(element);
	const { height } = element.getBoundingClientRect();
	const { childElementCount } = element;
	console.log(height, childElementCount);
	return height / childElementCount;
}

const ListAnimation = () => {
	const countRef = useRef(null);
	const countRef2 = useRef(null);

	useEffect(() => {
		if (countRef.current) {
			const transformAmount = getSectionHeight(countRef.current);
			console.log(transformAmount);
			const sequence = new Array(3).fill('').flatMap((_, index) => [
				[countRef.current, { y: `-${transformAmount * (index + 1)}px` }],
				[countRef2.current, { y: `-${transformAmount * (index + 1)}px` }, { at: '-1.8' }],
			]);
			timeline(sequence, {
				defaultOptions: {
					duration: 2,
					easing: [0.77, 0, 0.175, 1],
				},
			});
		}
	}, []);

	return (
		<div className="loader-container" data-scroll-section>
			<div className="counter-container">
				<ul ref={countRef} className="counter-list">
					<li>
						{/* <h3>2</h3> */}
						<Image src="/images/3.png" alt="number two" h="20vw" className="image-loader" />
					</li>

					<li>
						<Image src="/images/6.png" alt="number two" h="20vw" className="image-loader" />
						{/* <h3>4</h3> */}
					</li>

					<li>
						<Image src="/images/9.png" alt="number two" h="20vw" className="image-loader" />
						{/* <h3>6</h3> */}
					</li>

					<li>
						<Image src="/images/9.png" alt="number two" h="20vw" className="image-loader" />
						{/* <h3>9</h3> */}
					</li>
				</ul>
			</div>

			<div className="counter-container">
				<ul ref={countRef2} className="counter-list">
					<li>
						{/* <h3>2</h3> */}
						<Image src="/images/3.png" alt="number two" h="20vw" className="image-loader" />
					</li>

					<li>
						<Image src="/images/6.png" alt="number two" h="20vw" className="image-loader" />
						{/* <h3>4</h3> */}
					</li>

					<li>
						<Image src="/images/9.png" alt="number two" h="20vw" className="image-loader" />
						{/* <h3>6</h3> */}
					</li>

					<li>
						<Image src="/images/9.png" alt="number two" h="20vw" className="image-loader" />
						{/* <h3>9</h3> */}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ListAnimation;
