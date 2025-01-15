import Counter from './components/Counter';
import Stopwatch from './components/Stopwatch';
import TicTacToe from './components/tictactoe/TicTacToe';
import Home from './components/Home';
import Todo from './components/todoFile/Todo';
import ColorPicker from './components/ColorPicker';
import AddFoods from './components/AddFoods';
import List from './components/List';
import AddCar from './components/AddCar';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomeIcon from './components/HomeIcon';
import Flexdir from './components/Flexdir';
import DataStore from './components/DataStore';

function App() {

  return (
    <div>
      <Router>
        <HomeIcon />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/counter' element={<Counter />} />
          <Route path='/stopwatch' element={<Stopwatch />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/tictactoe' element={<TicTacToe />} />
          <Route path='/colorpicker' element={<ColorPicker />} />
          <Route path='/addfoods' element={<AddFoods />} />
          <Route path='/list' element={<List />} />
          <Route path='/addcar' element={<AddCar />} />
          <Route path='/flexdir' element={<Flexdir />} />
          <Route path='/datastore' element={<DataStore />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
