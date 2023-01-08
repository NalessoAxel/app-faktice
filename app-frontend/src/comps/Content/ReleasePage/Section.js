import { Heading, Flex, Text, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Col from '_comps/GridSystem/Col';
import Container from '_comps/GridSystem/Container';

import PauseIcon from '../../Icon/PauseIcon';
import PlayIcon from '../../Icon/PlayIcon';

import AudioPlayer from './AudioPlayer';

function Section({ releases }) {
	console.log({ releases });
	const [isPlaying, setIsPlaying] = useState(false);

	const [audioUrlSelected, setAudioUrlSelected] = useState([]);

	const audioDisplayed = (url) => {
		const audioArr = [];
		if (url.length > 0) {
			audioArr.push(url);
		}
		setAudioUrlSelected(audioArr);

		return audioArr;
	};

	const audioInfos = releases.map((release) => release.attributes.tracks);
	const audioTracks = audioInfos.map((tracks) => tracks.map((track) => track.track_audio.data.attributes.url));
	console.log({ audioTracks });

	return (
		<Container bgColor="body" mt="-1px" data-scroll-section>
			{releases.map((release) => (
				<Col colStart={4} colEnd={15}>
					<Flex flexDir="column" pt="4.75rem">
						<Heading as="h2" variant="h3">
							{release.attributes.release_artist_title}
						</Heading>
						<Text color="#fff" fontSize="1.75rem" pt="4.25rem" letterSpacing="0.05em" lineHeight="2.9rem">
							{release.attributes.release_description}
						</Text>
					</Flex>
				</Col>
			))}

			<Col colStart={17} colEnd={24} pt="4.75rem">
				<Flex flexDir="column">
					{audioTracks.map((track) => (
						<Button
							onClick={() => {
								audioDisplayed(track.url);
								setIsPlaying(!isPlaying);
							}}
							bgColor="transparent"
							border="none"
							_hover={{ bgColor: 'transparent' }}
							_active={{ bgColor: 'transparent' }}
							_focus={{ bgColor: 'transparent' }}
						>
							{isPlaying ? <PauseIcon /> : <PlayIcon />}
						</Button>
					))}

					{audioInfos.map((track) =>
						track.map((release) => (
							<Heading as="h4" variant="h4" pt="1rem">
								{release.track_name}
							</Heading>
						))
					)}
				</Flex>
			</Col>
			<Col colStart={4} colEnd={25}>
				{/* <AudioPlayer url={audioUrlSelected} isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> */}
				audio player
			</Col>
		</Container>
	);
}

Section.propTypes = {
	releases: PropTypes.object.isRequired,
};

export default Section;
