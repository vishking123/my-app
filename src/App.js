import './App.css'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
  <>
  <Navbar title="TextUtils" aboutText="About"/>
  <div className="container">
  <TextForm heading="Email Address"/>
  </div>
 
  </>
  );
  }
  export default App;
  