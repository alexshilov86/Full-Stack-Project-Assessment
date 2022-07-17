import "./App.css";
import Container from "./container";
import listOfVideos from "./exampleresponse.json";

function App() {
  
  return (
    <div >
      <Container data={listOfVideos} />
    </div>
  );
}

export default App;
