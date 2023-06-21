import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from "./components/common/Topbar";
function App() {
  return (
    <div className="App">
        <Topbar/>
    <div className={'container'}>
        <Sidebar></Sidebar>
        <div className={'others'}>other page</div>
    </div>
    </div>
  );
}

export default App;
