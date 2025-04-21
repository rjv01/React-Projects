import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center bgGrid'>
        <h1 className='text-5xl m-5'>Home Page</h1>
        <div className='grid grid-cols-3 m-5 text-3xl'>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/counter'}>Counter Application</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/stopwatch'}>StopWatch</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/todo'}>Todo List</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/tictactoe'}>TicTacToe</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/colorpicker'}>ColorPicker</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/addfoods'}>AddFoods</Link>
          {/* <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/list'}>List</Link> */}
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/addcar'}>AddCar</Link>
          {/* <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/flexdir'}>FlexDir</Link> */}
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/datastore'}>DataStore</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/digitalclock'}>DigitalClock</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/componentA'}>ComponentA</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/foucseg'}>FoucsEg</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/diffstateref'}>DiffstateRef</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/searchbar'}>SearchBar</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/entercolor'}>EnterColor</Link>
          {/* <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/content'}>Content</Link> */}
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/catfact'}>CatFact</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/grocerylist'}>GroceryList</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/fetchdata'}>FetchData</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/dragandrop'}>DragAndDrop</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/colorwheel'}>ColorWheel</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/fetchuserdata'}>FetchUserData</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/dragndroptask'}>DragnDropTask</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/dropdownmenu'}>DropDownMenu</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/countrystatecity'}>CountryStateCity</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/finallyweatherapi'}>FinallyWeatherApi</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/wordcounter'}>WordCounter</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/seatbooking'}>SeatBooking</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/memegen'}>MemeGen</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/commentsection'}>CommentSection</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/diwaligiftexchange'}>DiwaliGiftExchange</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/sendotpandCopy'}>SendOTPandCopy</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/multifilter'}>MultiFilter</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/kbc'}>KBC</Link>
          {/* <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/blogapp'}>BlogApp</Link> */}
          {/* <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/infinite'}>Infinite</Link> */}
        </div>
    </div>
  )
}
