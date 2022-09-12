import { Reveal, RevealProps } from "react-awesome-reveal";
import { fadeUpKeyframes } from "../utils/revealKeyframes";

interface IProps extends RevealProps {
	children: React.ReactNode;
	[x: string]: any;
}

const FadeUp = ({ children, ...rest }: IProps) => (
	<Reveal
		keyframes={fadeUpKeyframes}
		duration={700}
		fraction={0.4}
		triggerOnce
		{...rest}
	>
		{children}
	</Reveal>
);

export default FadeUp;
