interface Props {
	name: string;
}

export const HelloWorld = ({ name }: Props) => {
	return (
		<div>
			<h2>🌎 Hello World 🌏</h2>
			<h3>{name}</h3>
		</div>
	);
}
