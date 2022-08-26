import './App.css'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
  <>
  <Navbar title="TextUtils" aboutText="About"/>
  <div className="container">
  <TextForm heading="Enter Text to analyze below"/>
  </div>
 
  </>
  );
  }
  export default App;
  