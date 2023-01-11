import PropTypes from 'prop-types';

import Header from './Header';
import Section from './Section';

function ReleasePageComps({ releases }) {
	return (
		<>
			<Header releases={releases} />

			<Section releases={releases} />
		</>
	);
}

ReleasePageComps.propTypes = {
	releases: PropTypes.array.isRequired,
};

export default ReleasePageComps;
