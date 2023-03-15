import './App.css'
import Clubs from './pages/Clubs'


function Footer() {
  return (
    <>
      <div className="container">
          
          <div className="divLink">
            <h4>Programs</h4>
            <br/>
            <a href="./btech">
              <p>B.Tech</p>
            </a>
            <a href="./mtechd">
              <p>M.Tech Design</p>
            </a>
            <a href="./mtecht">
              <p>M.Tech Thermal</p>
            </a>
            <a href="./phd">
              <p>P.hd</p>
            </a>
          </div>
          
          <div className="divLink">
            <h4>People</h4>
            <br/>
            <a href="./faculty">
              <p>Faculty</p>
            </a>
            <a href="./Scholars">
              <p>Research Scholars</p>
            </a>
            <a href="./faculty">
              <p>Faculty</p>
            </a>
          </div>
         
          <div className="divLink">
            <h4>Important Links</h4>
            <br/>
            <a href="./department">
              <p>Department</p>
            </a>
            <a href="./labs">
              <p>Labs</p>
            </a>
            <a href="./downlaods">
              <p>Downloads</p>
            </a>
          </div>
          
          <div className="divLogo">
            <p>
              <img src='./src/assets/logo2.png'/>
            </p>
          </div>
     </div>
     
    
    <div className="footerLast">
          <div className="leftLast">
            <p>
              Copyright@{new Date().getFullYear()} Department of Mechanical Engineering
              NITJ, All Rights Reserved
            </p>
          </div>
          <div className="rightLast">
            <a href="./src/developers">Developed by Mechanical Students</a>
          </div>
      </div>
  </>
   
  );
}

function App() {
  return (
    <>
    <Clubs />
    <br></br>
    <Footer />
    </>
    )
  }

export default App;
