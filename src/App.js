import './App.css';
import Students from './pages/Students';
import { NavBarProvider } from './provider/NavBarProvider';

function App() {
  return (
    <div className="App">
      <NavBarProvider>
        <Students />
      </NavBarProvider>
    </div>
  );
}

export default App;
