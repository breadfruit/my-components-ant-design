import './App.css';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
function App() {
  return (
    <div className="App">
      <Menu mode={'horizontal'}>
        <MenuItem index={'0'}>12</MenuItem>
        <MenuItem index={'1'}>34</MenuItem>
        <MenuItem index={'2'}>56</MenuItem>
        <MenuItem index={'3'} disabled>
          78
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
