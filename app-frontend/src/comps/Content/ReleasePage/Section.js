import { AddIcon } from '@chakra-ui/icons';
import { Heading, Flex, Text, Button, Image, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Col from '_comps/GridSystem/Col';
import Container from '_comps/GridSystem/Container';

import AudioPlayer from './AudioPlayer';

function Section({ releases }) {
	console.log({ releases });
	const [isPlaying, setIsPlaying] = useState(false);

	// const cover = releases.releasePages.data.map((playerCover) => playerCover.attributes.release_cover.data.attributes.url);
	const cover = '';

	const bandcampLink = releases.releasePages.data.map((bandcamp) => bandcamp.attributes.bandcamp_link);

	const [audioUrlSelected, setAudioUrlSelected] = useState([]);

	const audioDisplayed = (url, name) => {
		const audioArr = [];

		if (url.length > 0 && name.length > 0) {
			audioArr.push(url, name);
		}
		setAudioUrlSelected(audioArr);

		return audioArr;
	};

	const audioInfos = releases.releasePages.data.map((release) => release.attributes.tracks);

	return (
		<Container bgColor="body" mt="-1px" data-scroll-section>
			{releases.releasePages.data.map((release) => (
				<Col key={release.id} colStart={4} colEnd={14} pb="2rem">
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

			<Col colStart={15} colEnd={26} pt="4.75rem">
				{audioInfos.map((track) =>
					track.map((tracks) => (
						<Flex align="center" pb="1rem">
							<Button
								key={`itterationAudio${track.indexOf(tracks)}`}
								onClick={() => {
									audioDisplayed(tracks.track_audio.data.attributes.url, tracks.track_name);
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

							<Heading key={`itterationTrackArr${track.indexOf(tracks)}`} as="h4" variant="h4">
								{tracks.track_name}
							</Heading>

							<Box as="a" href={`${bandcampLink}`} target="_blank" rel="noreferrer" px="1rem">
								<Image src="/svg/cart_icon.svg" width="1.3rem" height="1.3rem" />
							</Box>
						</Flex>
					))
				)}
			</Col>

			<Col colStart={2} colEnd={26} borderTop="1px solid #E8E8E8">
				<AudioPlayer url={audioUrlSelected[0]} name={audioUrlSelected[1] ? audioUrlSelected[1] : 'No track selected'} cover={cover} />
			</Col>
		</Container>
	);
}

Section.propTypes = {
	releases: PropTypes.array.isRequired,
};

export default Section;
