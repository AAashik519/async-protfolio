 
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 
import Navbar from './Componets/Navbar';
import Header from './Componets/Header';
import Particles from 'react-particles-js';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
    <Particles 
      params={{
        particles: {
         number:{
           value:40,
           density:{
             enable:true,
             value_area:900
           }
         },
         shape: {
          type:'star',
          stroke:{
            width:6,
            color:'#f9ab00'
          }
        }
        }
        
      }}
    />
      <Navbar />
      <Header />

     </>
    
  );
}

export default App;
