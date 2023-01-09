export default function getSectionHeight(element) {
	const { height } = element.getBoundingClientRect();
	const { childElementCount } = element;

	return height / childElementCount;
}
