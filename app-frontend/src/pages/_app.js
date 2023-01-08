import { ChakraProvider } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { createContext } from 'react';

import LocomotiveScroll from '_comps/LocomotiveScroll';
import Menu from '_comps/Menu';
import theme from '_comps/Theme';

import { fetchAPI } from '../Lib/api';

import 'locomotive-scroll/dist/locomotive-scroll.css';

export const GlobalContext = createContext({});

export default function App({ Component, pageProps }) {
	return (
		<GlobalContext.Provider value={global.attributes}>
			<ChakraProvider theme={theme}>
				<LocomotiveScroll>
					<Menu />
					<Component {...pageProps} />
				</LocomotiveScroll>
			</ChakraProvider>
		</GlobalContext.Provider>
	);
}

App.getIntialProps = async (appContext) => {
	const appProps = await App.getIntialProps(appContext);
	const globalResponse = await fetchAPI('/global');

	return { ...appProps, pageProps: { global: globalResponse } };
};

App.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};
