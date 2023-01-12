import { Button, Flex, Text, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import PauseIcon from '../../Icon/PauseIcon';
import PlayIcon from '../../Icon/PlayIcon';

function AudioPlayer({ url, name, cover }) {
	const audioPlayer = useRef();

	const progressBar = useRef();

	const animationRef = useRef();

	const [isPlaying, setIsPlaying] = useState(false);

	const [isUrl, setIsUrl] = useState(false);

	const [duration, setDuration] = useState(0);

	const [currentTime, setCurrentTime] = useState(0);

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
		<Flex px={2} flexDir="column" w="100%" h="150px" justifyContent="center">
			<Flex alignItems="center" justifyContent="space-between" pt="0.75rem" zIndex="100">
				<Text color="#fff">Now Playing: {name}</Text>
			</Flex>

			<Flex w="100%" alignItems="center">
				<Flex alignItems="center">
					<audio ref={audioPlayer} src={url}>
						<track kind="captions" />
					</audio>

					<Button background="transparent" border="none" width="75px" fontSize="2rem" height="75px" _hover={{ boxShadow: 'none', color: 'tertiary' }} onClick={togglePlayPause}>
						{isPlaying ? <PauseIcon /> : <PlayIcon />}
					</Button>
				</Flex>

				<Flex w="100%" alignItems="center">
					<Text fontFamily="body" px={4} color="#fff">
						{calculateTime(currentTime)}
					</Text>

					<input type="range" className="progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} />

					<Text fontFamily="body" px={4} color="#fff">
						{duration && calculateTime(duration) ? calculateTime(duration) : '00:00'}
					</Text>
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
