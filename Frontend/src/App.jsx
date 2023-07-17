import './App.css'
import Navbar from './components/Navbar/Navbar'
import DisplayHouses from './components/DisplayHouse/DisplayHouses'

function App() {


  return (
    <div className='bg-gray-10'>
      <div className=' w-11/12 mx-auto '>
        <Navbar />
        <DisplayHouses/>

      </div>
    </div>
  )
}

export default App
