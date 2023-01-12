import { Button, Flex, Text, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef, forwardRef } from 'react';

import PauseIcon from '../Icon/PauseIcon';
import PlayIcon from '../Icon/PlayIcon';

const formWaveSurferOptions = (ref) => ({
	container: ref,
	waveColor: '#eee',
	progressColor: '#696767',
	cursorColor: '#A4A4A4',
	cursorWidth: 3,
	barWidth: 3,
	barRadius: 3,
	responsive: true,
	height: 100,
	normalize: true,
	partialRender: true,
	plugins: [],
});

const Wavesurfer = forwardRef(({ children, audio }, ref) => {
	const url = audio;

	const wavesurfer = useRef(null);

	const waveformRef = useRef(null);

	const [isLoading, setIsLoading] = useState(true);

	const [playing, setPlaying] = useState(false);

	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const create = async () => {
			const WaveSurfer = (await import('wavesurfer.js')).default;

			const options = formWaveSurferOptions(waveformRef.current);

			wavesurfer.current = WaveSurfer.create(options);

			if (!url) {
				<Text>Please add Audio to the player</Text>;
			} else {
				wavesurfer.current.load(url);
			}

			wavesurfer.current.on('marker-click', (marker) => {
				console.log('marker drop', marker);
			});
		};

		create();

		return () => {
			if (wavesurfer.current) {
				console.log('destroy');
				wavesurfer.current.destroy();
			}
		};
	}, [url, ref]);

	const handlePlayPause = () => {
		setPlaying(!playing);
		wavesurfer.current.playPause();
	};

	return (
		<Flex flexDir="column" w="100%" mt="-50px">
			<div id="waveform" ref={waveformRef} />
			<Flex className="controls">
				<Button background="transparent" border="none" width="75px" fontSize="2rem" height="75px" _hover={{ boxShadow: 'none' }} onClick={handlePlayPause}>
					{playing ? <PauseIcon /> : <PlayIcon />}
				</Button>
			</Flex>
		</Flex>
	);
});

Wavesurfer.defaultProps = {
	children: null,
};

Wavesurfer.propTypes = {
	audio: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default Wavesurfer;
