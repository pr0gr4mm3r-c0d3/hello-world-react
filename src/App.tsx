// Icons
import { FaGithub, FaReact } from 'react-icons/fa';

// Styles
import './App.css';

// Images
import logo from './logo.svg';

// Components
import { HelloWorld } from './components/HelloWorld';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaReact /> Learn React <FaReact />
				</a>
				<HelloWorld name='🧔🏽 @pr0gr4mm3r_c0d3 💻' />
				<a
					className='link-to-code'
					href='https://github.com/pr0gr4mm3r-c0d3/hello-world-react'
					target='_blank'
					rel='noopener noreferrer'
				>
					<code>
						<FaGithub /> View Code in <FaGithub />
					</code>
				</a>
			</header>
		</div>
	);
}

export default App;
