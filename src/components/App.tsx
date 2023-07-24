import "./App.css";
import episodes from '../episodes.json'
console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App() {
    return (
        <div className="App">
            <h1>Hello Neill from Oskar and Tom</h1>
        </div>
    );
}

export default App;
