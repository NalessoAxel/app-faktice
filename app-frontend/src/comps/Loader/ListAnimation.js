import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function ListAnimation({ forwardedCounterRef, forwardedCounter2Ref }) {
	return (
		<div className="loader-container" data-scroll-section>
			<div className="counter-container">
				<ul className="counter-list" ref={forwardedCounterRef}>
					<li>
						<Image src="/images/2.png" alt="number two" h="10vw" className="image-loader" />
					</li>

					<li>
						<Image src="/images/4.png" alt="number two" h="10vw" className="image-loader" />
					</li>

					<li>
						<Image src="/images/6.png" alt="number two" h="10vw" className="image-loader" />
					</li>

					<li>
						<Image src="/images/9.png" alt="number two" h="10vw" className="image-loader" />
					</li>
				</ul>
			</div>

			<div className="counter-container">
				<ul className="counter-list" ref={forwardedCounter2Ref}>
					<li>
						<Image src="/images/3.png" alt="number two" h="10vw" className="image-loader" />
					</li>

					<li>
						<Image src="/images/8.png" alt="number two" h="10vw" className="image-loader" />
					</li>

					<li>
						<Image src="/images/9.png" alt="number two" h="10vw" className="image-loader" />
					</li>

					<li>
						<Image src="/images/9.png" alt="number two" h="10vw" className="image-loader" />
					</li>
				</ul>
			</div>
		</div>
	);
}

ListAnimation.defaultProps = {
	forwardedCounterRef: null,
	forwardedCounter2Ref: null,
};

ListAnimation.propTypes = {
	forwardedCounterRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
	forwardedCounter2Ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export default ListAnimation;
