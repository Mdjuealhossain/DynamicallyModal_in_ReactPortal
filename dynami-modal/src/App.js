
import './App.css';
import ControCard from './CardComponents/Card1';
import Modal from './Components/modal';
import Portal from './CreatePortal/portal';


function App() {
  return (
    <div className="App">
      
<Portal>
<ControCard />
</Portal>
    </div>
  );
}

export default App;
