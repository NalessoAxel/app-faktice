import { ApolloClient, InMemoryCache } from '@apollo/client';

import PropTypes from 'prop-types';

import ReleasePage from '_comps/content/ReleasePage';

import { GET_SINGLE_RELEASE } from '../../graphql/queries';

const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
});

function Slug({ releases }) {
	return <ReleasePage releases={releases} />;
}
export async function getStaticPaths() {
	const { data } = await client.query({ query: GET_SINGLE_RELEASE });

	const paths = data.releasePages.data.map((release) => ({
		params: { slug: release.attributes.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { data } = await client.query({
		query: GET_SINGLE_RELEASE,
		variables: { slug: params.slug },
	});

	return {
		props: { releases: data },
		revalidate: 1,
	};
}

Slug.propTypes = {
	releases: PropTypes.array.isRequired,
};

export default Slug;
