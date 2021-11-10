import { useEffect, useState } from 'react';
import Signup from './components/Signup'
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav'
import Signin from './components/Signin';
// import { auth } from './firebase';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null)
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(userAuth => {
  //     setUser(userAuth)
  //     // console.log(userAuth);
  //     const user = {
  //       uid: userAuth?.uid,
  //       email: userAuth?.email
  //     }
  //     if (userAuth) {
  //       console.log(userAuth)
  //       setUser(user)
  //     } else {
  //       setUser(null)
  //     }
  //   })
  //   return unsubscribe
  // }, [])

console.log(user)

  return (
    <BrowserRouter>
    <div className="App">
      <Nav user={user}/>
     <Routes>    
      <Route path="/signup" element={<Signup user={user} />} />
      <Route path="/" element={<Signin user={user} />} />
      <Route path="/home" element={<Home user={user} />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
