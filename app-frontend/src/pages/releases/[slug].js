import { useRouter } from 'next/router';

import PropTypes from 'prop-types';

import ReleasePage from '_comps/content/ReleasePage';

import { fetchAPI } from '../../Lib/api';

function Slug({ releases }) {
	return <ReleasePage releases={releases} />;
}
export async function getStaticPaths() {
	const releaseRes = await fetchAPI('/release-pages', { fields: ['slug'] });

	return {
		paths: releaseRes.data.map((release) => ({
			params: {
				slug: release.attributes.slug,
			},
		})),

		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const allReleaseRes = await fetchAPI('/release-pages', {
		filters: {
			slug: params.slug,
		},
		populate: 'deep',
	});

	return {
		props: { releases: allReleaseRes.data },
		revalidate: 1,
	};
}

Slug.propTypes = {
	releases: PropTypes.object.isRequired,
};

export default Slug;
