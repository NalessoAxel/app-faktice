import { useSpring } from 'framer-motion';
import PropTypes from 'prop-types';

import { useEffect } from 'react';
import useResizeObserver from 'use-resize-observer';

import useStore from '_contexts/store';

import MotionBox from '../Utils/MotionBox';

function LocomotiveScrollComp({ children }) {
	const { ref: container, height = 1 } = useResizeObserver();

	const { scroll, setStore } = useStore();

	const maxHeight = useSpring(0, { damping: 25, stiffness: 250, mass: 0.1 });

	useEffect(() => {
		(async () => {
			try {
				const LocomotiveScroll = (await import('locomotive-scroll')).default;
				const dataScrollContainer = document.querySelector('[data-scroll-container]');

				if (!dataScrollContainer) {
					console.warn('locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.');
				}

				setStore(() => ({
					scroll: new LocomotiveScroll({
						el: dataScrollContainer ?? undefined,
						smooth: true,
						reloadOnContextChange: false,

						lerp: 0.1,
						resetNativeScroll: false,
						getDirection: true,
						getSpeed: true,
						useKeyboard: true,
						mobile: true,
						tablet: true,
					}),
				}));
			} catch (error) {
				console.log(error);
			}
		})();

		return () => {
			window.locomotive?.destroy();
		};
	}, []);

	useEffect(() => {
		// ? a resizing happened (browser resize, page transition, etc) so we need to update the instance elements
		try {
			scroll?.update();
		} catch (error) {
			throw Error(`[LocomotiveScroll]: ${error}`);
		}
	}, [maxHeight, height]);

	return (
		<div ref={container} data-scroll-container>
			<MotionBox key="paddingTopFromNoticeBarPresence" w="100%" h="100vh" overflowY="hidden" pointerEvents="none" style={{ maxHeight }} />

			{children}
		</div>
	);
}

LocomotiveScrollComp.defaultProps = {
	children: null,
};

LocomotiveScrollComp.propTypes = {
	children: PropTypes.node,
};

export default LocomotiveScrollComp;
