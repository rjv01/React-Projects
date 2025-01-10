import Counter from './components/Counter';
import Stopwatch from './components/Stopwatch';
import TicTacToe from './components/tictactoe/TicTacToe';
import Home from './components/Home';
import Todo from './components/todoFile/Todo';
import ColorPicker from './components/ColorPicker';
import AddFoods from './components/AddFoods';
import List from './components/List';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/counter' element={<Counter />} />
          <Route path='/stopwatch' element={<Stopwatch />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/tictactoe' element={<TicTacToe />} />
          <Route path='/colorpicker' element={<ColorPicker />} />
          <Route path='/addfoods' element={<AddFoods />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
