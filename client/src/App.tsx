import './App.css';
import axios from 'axios';

function App() {
	const testingBackend = () => {
		console.log("HELLO WORLD!");
		const baseUrl = 'http://localhost:4000/api/add/products'
		axios
		.post(baseUrl)
		.then((response) => {
			console.log(response);
		})
	}
	
  return (
    <div className="App">
			<h1>BAR INVENTORY</h1>
			<button onClick={testingBackend}>TEST BACKEND</button>
    </div>
  );
}

export default App;
