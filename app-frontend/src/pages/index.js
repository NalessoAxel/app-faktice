import { ApolloClient, InMemoryCache } from '@apollo/client';

import Head from 'next/head';
import PropTypes from 'prop-types';

import HomePage from '_comps/Content/HomePage';

import { GET_ALL_RELEASES_COVER_URL } from '../graphql/queries';

function Home({ images }) {
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
	const client = new ApolloClient({
		uri: 'http://localhost:1337/graphql',
		cache: new InMemoryCache(),
	});
	// const releasesCover = await Promise.all([fetchAPI('/home-page-images', { populate: '*' })]);
	const { data } = await client.query({
		query: GET_ALL_RELEASES_COVER_URL,
	});

	return {
		props: { images: data },
		revalidate: 1,
	};
}

Home.propTypes = {
	images: PropTypes.object.isRequired,
};

export default Home;
