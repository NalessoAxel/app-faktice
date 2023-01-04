import { ChakraProvider } from '@chakra-ui/react';
import theme from '_comps/Theme';
import Menu from '_comps/Menu';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider theme={theme}>
				<Menu />
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}
