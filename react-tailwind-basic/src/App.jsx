import Counter from './components/Counter';
import Stopwatch from './components/Stopwatch';
import TicTacToe from './components/tictactoe/TicTacToe';
import Home from './components/Home';
import Todo from './components/todoFile/Todo';
import ColorPicker from './components/ColorPicker';
import AddFoods from './components/AddFoods';
import List from './components/List';
import AddCar from './components/AddCar';
import FinallyWeatherApi from './components/FinallyWeatherApi';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import HomeIcon from './components/HomeIcon';
import Flexdir from './components/Flexdir';
import DataStore from './components/DataStore';
import DigitalClock from './components/DigitalClock';
import ComponentA from './components/ComponentA';
import FoucsEg from './components/FoucsEg';
import DiffstateRef from './components/DiffstateRef';
import SearchBar from './components/SearchBar';
import Infinite from './components/Infinite';
import EnterColor from './components/EnterColor';
import Content from './components/GroceriesList/Content';
import CatFact from './components/CatFact';
import GroceryList from './components/GroceriesList/GroceryList';
import FetchData from './components/JsonPlaceHolder/FetchData';
import BlogApp from './ReactBlog/BlogApp';
import DragAndDrop from './components/DragAndDrop/DndHome'
import ColorWheel from './components/ColorWheel'
import FetchUserData from './components/FetchUserData'
import DragnDropTask from './components/DragDropHome/DragnDropTask';
import DropDownMenu from './components/DropDownMenu';
import CountryStateCity from './components/CountryList/CountryStateCity';
import CountryListI from './components/CountryList/CountryListI';
import WordCounter from './components/WordCounter';
import SeatBooking from './components/SeatBooking';
import MemeGen from './components/MemeGenFolder/MemeGen';
import CommentSection from './components/Comment/CommentSection';
import DiwaliGiftExchange from './components/Diwali/DiwaliGiftExchange';
import SendOTPandCopy from './components/OTP/SendOTPandCopy';
import MultiFilter from './components/MultiFilters/MultiFilter';
import KBC from './components/Quiz/KBC';
import FAQs from './components/FAQs/Faques';
import Modal from './components/ModalCom/Modal';
import CommanPage from './components/StackQueue/CommanPage';
import RedoUndoHome from './components/RedoUndo/RedoUndoHome';
import ShoppingList from './components/ShoppingLi/ShoppingList';
import MultiStepFormPage from './components/MultiStepForm/MultiStepFormPage';
import ImageCarousel from "./components/ImageCarousel/ImgCarousel";
import RatingStar from './components/Rating/RatingStar';

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
          <Route path='/digitalclock' element={<DigitalClock />} />
          <Route path='/componentA' element={<ComponentA />} />
          <Route path='/foucseg' element={<FoucsEg />} />
          <Route path='/diffstateref' element={<DiffstateRef />} />
          <Route path='/searchbar' element={<SearchBar />} />
          <Route path='/infinite' element={<Infinite />} />
          <Route path='/entercolor' element={<EnterColor />} />
          {/* <Route path='/content' element={<Content />} /> */}
          <Route path='/grocerylist' element={<GroceryList />} />
          <Route path='/catfact' element={<CatFact />} />
          <Route path='/fetchdata' element={<FetchData />} />
          <Route path='/dragandrop' element={<DragAndDrop />} />
          <Route path='/colorwheel' element={<ColorWheel />} />
          <Route path='/fetchuserdata' element={<FetchUserData />} />
          {/* <Route path='/blogapp' element={<BlogApp />} /> */}
          
          <Route path='/dragndroptask' element={<DragnDropTask />} />
          <Route path='/dropdownmenu' element={<DropDownMenu />} />
          <Route path='/countrystatecity' element={<CountryStateCity />} />
          <Route path='/countrylisti/:countryCode' element={<CountryListI />} />
          <Route path='/finallyweatherapi' element={<FinallyWeatherApi />} />
          <Route path='/wordcounter' element={<WordCounter />} />
          <Route path='/seatbooking' element={<SeatBooking />} />
          <Route path='/memegen' element={<MemeGen />} />
          <Route path='/commentsection' element={<CommentSection />} />
          <Route path='/diwaligiftexchange' element={<DiwaliGiftExchange />} />
          <Route path='/sendotpandcopy' element={<SendOTPandCopy />} />
          <Route path='/multifilter' element={<MultiFilter />} />
          <Route path='/kbc' element={<KBC />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/modal' element={<Modal />} />
          <Route path='/commanpage' element={<CommanPage />} />
          <Route path='/redoundo' element={<RedoUndoHome />} />
          <Route path='/shoppinglist' element={<ShoppingList />} />
          <Route path='/multistepformpage' element={<MultiStepFormPage />} />
          <Route path='/imagecarousel' element={<ImageCarousel />} />
          <Route path='/ratingstar' element={<RatingStar />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
