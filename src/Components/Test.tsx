interface Props {
  a: boolean;
  abc: string;
}
function Test({ a, abc }: Props) {
	const b = 10;
	const c = b;
	return (
		<div>
			{a}
			{c}
			{abc}
		</div>
	);
}

export default Test;
