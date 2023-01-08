import Head from 'next/head';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import getStrapiMedia from '../../Lib/media';
import { GlobalContext } from '../../pages/_app';

function Seo({ seo }) {
	const { defaultSeo, siteName } = useContext(GlobalContext);
	const seoWithDefaults = {
		...defaultSeo,
		...seo,
	};
	const fullSeo = {
		...seoWithDefaults,
		// Add title suffix
		metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
		// Get full image URL
		shareImage: getStrapiMedia(seoWithDefaults.shareImage),
	};
	return (
		<Head>
			{fullSeo.metaTitle && (
				<>
					<title>{fullSeo.metaTitle}</title>
					<meta property="og:title" content={fullSeo.metaTitle} />
					<meta name="twitter:title" content={fullSeo.metaTitle} />
				</>
			)}
			{fullSeo.metaDescription && (
				<>
					<meta name="description" content={fullSeo.metaDescription} />
					<meta property="og:description" content={fullSeo.metaDescription} />
					<meta name="twitter:description" content={fullSeo.metaDescription} />
				</>
			)}
			{fullSeo.shareImage && (
				<>
					<meta property="og:image" content={fullSeo.shareImage} />
					<meta name="twitter:image" content={fullSeo.shareImage} />
					<meta name="image" content={fullSeo.shareImage} />
				</>
			)}
			{fullSeo.release_page && <meta property="og:type" content="all release of the label faktice." />}
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	);
}

Seo.propTypes = {
	seo: PropTypes.object.isRequired,
};

export default Seo;
