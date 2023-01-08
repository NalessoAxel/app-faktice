import PropTypes from 'prop-types';

import AudioPlayer from './AudioPlayer';
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
	releases: PropTypes.object.isRequired,
};

export default ReleasePageComps;
