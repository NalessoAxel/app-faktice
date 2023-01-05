import { ChakraProvider } from '@chakra-ui/react';

import theme from '_comps/Theme';
import Menu from '_comps/Menu';
import LocomotiveScroll from '_comps/LocomotiveScroll';

import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider theme={theme}>
				<LocomotiveScroll>
					<Menu />
					<Component {...pageProps} />
				</LocomotiveScroll>
			</ChakraProvider>
		</>
	);
}
