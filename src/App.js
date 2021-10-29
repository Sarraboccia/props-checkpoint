
// import logo from './logo.svg';
import "./App.css";
import Profile from "./Profile/Profile.js";
import Memories from "./Memories.JPG"
function App() {

  function showAlert (name) {
      
  return alert(name)
     
  }


  return (
    <div className="App">
      <Profile
        fullName="Sara Boccia"
        bio="If you get tired, learn to rest, not to quit."
        profession="Web development"
        showAlert={showAlert}
        description="my discription"
      >
        <div>
        <img src={Memories} alt="children props" width= '250px' />
        <h1>DOUZ</h1>
   </div>
   
      </Profile>
    </div>
    );
   
  
}

export default App;