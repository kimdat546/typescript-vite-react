import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Test from './Components/Test';

function App() {
	const [count, setCount] = useState(0);
	// const [count1, setCount1] = useState(0)
	const abc = 'dasdsa';
	return (
		<div className="App">
			<div>
				{(() => 1)()}
				{abc}
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<Test a abc="dasdsaasd" />
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount(number => number + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
