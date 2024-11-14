// import './App.css';
// import ChildOne from './components/ChildOne';
// import ChildTwo from './components/ChildTwo';
// import ChildThree from './components/ChildThree';

// function App() {
//   return (
//     <div className="w-full h-screen flex justify-centre items-center">
//     <ChildOne/>
//     <ChildTwo/>
//     <ChildThree/> 
// </div> 
//   );
// }
// export default App;



// import React from "react";
// import TopBar from "./components/TopBar";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Footer from './components/Private'
// function App() {
//   return(
// <div>
//     <TopBar/>
//     <Navbar/>
//     <Hero/>
//     <Footer/>
// </div>
//   );
// }
// export default App; 




import './App.css';
import Header from './components/PortFolio Resume/Header';
import Hero from './components/PortFolio Resume/Hero';
import About from './components/PortFolio Resume/About';
import Project from './components/PortFolio Resume/Project';
import Resume from './components/PortFolio Resume/Resume';
import Contact from './components/PortFolio Resume/Contact';
import Footer from './components/PortFolio Resume/Footer';

 function App () {
    return(
        <div className='App'>
            <Header/>
            <Hero/>
            <About/>
            <Project/>
            <Resume/>
            <Contact/>
            <Footer/>
        </div>
    )
 }
 export default App;