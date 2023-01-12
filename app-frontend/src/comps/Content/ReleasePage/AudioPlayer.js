import { Flex, Text, Image } from '@chakra-ui/react';

import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const Waveform = dynamic(() => import('../../Utils/Waveform'), { ssr: false });

function AudioPlayer({ url, name, cover }) {
	const ref = useRef();

	return (
		<Flex px={2} flexDir="column" w="100%" justifyContent="center">
			<Flex alignItems="center" justifyContent="space-between" pt="0.75rem" zIndex="100">
				<Text color="#fff">Now Playing: {name}</Text>
			</Flex>

			<Flex w="100%" alignItems="center">
				<Flex alignItems="center" w="100%">
					<Waveform audio={url} ref={ref} />
				</Flex>

				<Flex>
					<Image src={cover} alt="album cover" objectFit="contain" width="75px" height="75px" />
				</Flex>
			</Flex>
		</Flex>
	);
}
AudioPlayer.defaultProps = {
	url: '',
};

AudioPlayer.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string.isRequired,
	cover: PropTypes.array.isRequired,
};

export default AudioPlayer;
