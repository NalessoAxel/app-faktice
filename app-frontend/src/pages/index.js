import Head from 'next/head';
import PropTypes from 'prop-types';

import HomePage from '_comps/Content/HomePage';

import { fetchAPI } from '../Lib/api';

function Home({ images }) {
	console.log({ images });
	return (
		<>
			<Head>
				<title>Faktice Label</title>
				<meta name="description" content="Website of the Faktice label" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<HomePage images={images} />
		</>
	);
}

export async function getStaticProps() {
	const [releasesCover] = await Promise.all([fetchAPI('/home-page-images', { populate: '*' })]);

	return {
		props: { images: releasesCover },
		revalidate: 1,
	};
}

Home.propTypes = {
	images: PropTypes.object.isRequired,
};

export default Home;
