import { timeline } from 'motion';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

import Loader from '../Loader';
import getSectionHeight from '../Utils/getSectionHeight';

import ReleaseGrid from './ReleaseGrid';

function HomePage({ images }) {
	const loaderRef = useRef(null);
	const countRef = useRef(null);
	const countRef2 = useRef(null);
	const imageRef = useRef(null);

	useEffect(() => {
		if (countRef.current) {
			const transformAmount = getSectionHeight(countRef.current);

			const sequence = new Array(3).fill('').flatMap((_, index) => [
				[imageRef.current, { y: -500 }],
				[countRef.current, { y: `-${transformAmount * (index + 1)}px` }],
				[countRef2.current, { y: `-${transformAmount * (index + 1)}px` }, { at: '-0.8' }],
			]);

			timeline(sequence, {
				defaultOptions: {
					duration: 1,
					easing: [0.77, 0, 0.175, 1],
				},
			});
		}
	}, []);

	useEffect(() => {
		const sequence = [
			[imageRef.current, { opacity: 0 }],
			[countRef.current, { opacity: 0 }, { at: '<' }],
			[countRef2.current, { opacity: 0 }, { at: '<' }],
			[loaderRef.current, { y: '-100vh' }, { at: '-0.5' }],
		];
		timeline(sequence, {
			defaultOptions: {
				duration: 2,
				easing: [0.77, 0, 0.175, 1],
				delay: 7,
			},
		});
	}, []);

	return (
		<>
			<Loader forwardedCounterRef={countRef} forwardedCounter2Ref={countRef2} imageRef={imageRef} />
			<ReleaseGrid images={images} loaderRef={loaderRef} />
		</>
	);
}
HomePage.propTypes = {
	images: PropTypes.object.isRequired,
};

export default HomePage;
