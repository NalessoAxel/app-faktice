import { Button, Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import PauseIcon from '../../Icon/PauseIcon';
import PlayIcon from '../../Icon/PlayIcon';

function AudioPlayer({ url, name }) {
	const [isPlaying, setIsPlaying] = useState(false);

	const [duration, setDuration] = useState(0);

	const [currentTime, setCurrentTime] = useState(0);

	const audioPlayer = useRef();
	const progressBar = useRef();
	const animationRef = useRef();

	useEffect(() => {
		const seconds = Math.floor(audioPlayer.current.duration);

		setDuration(seconds);

		progressBar.current.max = seconds;
	}, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);

		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

		const seconds = Math.floor(secs % 60);

		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

		return `${returnedMinutes}:${returnedSeconds}`;
	};

	const togglePlayPause = () => {
		const prevValue = isPlaying;
		setIsPlaying(!prevValue);

		if (!prevValue) {
			audioPlayer.current.play();
			animationRef.current = requestAnimationFrame(whilePlaying);
		} else {
			audioPlayer.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
	};

	const whilePlaying = () => {
		progressBar.current.value = audioPlayer.current.currentTime;
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	const changePlayerCurrentTime = () => {
		progressBar.current.style.setProperty('--seek-before-width', `${(progressBar.current.value / duration) * 100}%`);
		setCurrentTime(progressBar.current.value);
	};

	return (
		<Flex px={2} flexDir="column" w="100%" h="77px" justifyContent="center">
			<Flex alignItems="center" justifyContent="space-between" pl={6} zIndex="100">
				<Text color="#fff">Currently Playing: {name}</Text>
			</Flex>

			<Flex w="100%" alignItems="center">
				<Flex alignItems="center">
					<audio ref={audioPlayer} src={url}>
						<track kind="captions" />
					</audio>

					<Button background="transparent" border="none" width="75px" fontSize="32px" height="75px" _hover={{ boxShadow: 'none', color: 'tertiary' }} onClick={togglePlayPause}>
						{isPlaying ? <PauseIcon /> : <PlayIcon />}
					</Button>
				</Flex>

				<Flex w="100%" alignItems="center">
					<Text textStyle="xxl" fontFamily="monospace" px={4} color="#fff">
						{calculateTime(currentTime)}
					</Text>

					<input type="range" className="progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} />

					<Text textStyle="xxl" color="#fff" fontFamily="monospace" px={4}>
						{duration && calculateTime(duration) ? calculateTime(duration) : '00:00'}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}

AudioPlayer.propTypes = {
	url: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
};

export default AudioPlayer;
