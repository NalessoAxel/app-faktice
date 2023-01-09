import { AddIcon } from '@chakra-ui/icons';
import { Heading, Flex, Text, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Col from '_comps/GridSystem/Col';
import Container from '_comps/GridSystem/Container';

import AudioPlayer from './AudioPlayer';

function Section({ releases }) {
	const [isPlaying, setIsPlaying] = useState(false);

	const [audioUrlSelected, setAudioUrlSelected] = useState([]);

	const audioDisplayed = (url, name) => {
		const audioArr = [];
		if (url.length > 0 && name.length > 0) {
			audioArr.push(url, name);
		}
		setAudioUrlSelected(audioArr);

		return audioArr;
	};

	const audioInfos = releases.map((release) => release.attributes.tracks);

	return (
		<Container bgColor="body" mt="-1px" data-scroll-section>
			{releases.map((release) => (
				<Col key={`itteration${releases.indexOf(release)}`} colStart={4} colEnd={15}>
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

			<Col colStart={17} colEnd={26} pt="4.75rem">
				{audioInfos.map((track) =>
					track.map((tracks) => (
						<Flex align="center">
							<Button
								key={`itterationAudio${track.indexOf(tracks)}`}
								onClick={() => {
									audioDisplayed(tracks.track_audio.data.attributes.url, tracks.track_audio.data.attributes.name);
									setIsPlaying(!isPlaying);
								}}
								bgColor="transparent"
								border="none"
								_hover={{
									_after: {
										content: `'Listen track'`,
										position: 'absolute',
										bottom: '0',
										right: '10',
										border: '1px solid black',
										borderRadius: '5px',
										background: '#E5E5E5',
										padding: '4px',
										fontFamily: 'heading',
										color: '#000',
									},
								}}
								_active={{ bgColor: 'transparent' }}
								_focus={{ bgColor: 'transparent' }}
							>
								<AddIcon color="#fff" />
							</Button>

							<Heading key={`itterationTrackArr${track.indexOf(tracks)}`} as="h4" variant="h4" pt="1rem">
								{tracks.track_audio.data.attributes.name}
							</Heading>
						</Flex>
					))
				)}
			</Col>

			<Col colStart={4} colEnd={25}>
				<AudioPlayer url={audioUrlSelected[0]} name={audioUrlSelected[1]} />
			</Col>
		</Container>
	);
}

Section.propTypes = {
	releases: PropTypes.object.isRequired,
};

export default Section;
