import Head from 'next/head';

import HomePage from '_comps/Content/HomePage';
import Loader from '_comps/Loader';

function Home({ images }) {
	return (
		<>
			<Head>
				<title>Faktice Label</title>
				<meta name="description" content="Website of the Faktice label" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<>
				<Loader />
				<HomePage images={images} />
			</>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(`http://localhost:1337/api/home-page-images?populate=*`);
	const dataImages = await res.json();

	return {
		props: {
			images: dataImages,
		},
	};
}

export default Home;
