
import './App.css';
import ListStudentData from './Component/ListStudentData';
import Navigation from './Component/Navigation';

function App() {
    
  
 
  return (
    
    <div className="container">  
        <Navigation/> 
        <div className="container">
          <ListStudentData/>
        </div>
    </div>
    
  );
}

export default App;
