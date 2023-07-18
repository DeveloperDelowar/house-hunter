import './App.css'
import BookHouseForm from './components/BookHouseForm/BookHouseForm';
import Houses from './components/Dashboard/Owner/Houses';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import HouseDetails from './components/HouseDetails/HouseDetails';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from "react-router-dom";
import Bookings from './components/Dashboard/Owner/Bookings';
import AddNewHouse from './components/Dashboard/Owner/AddNewHouse';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import { useState } from 'react';
import RequireAuth from './components/shared/RequireAuth/RequireAuth';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className='bg-gray-10'>
      <div className=' w-11/12 mx-auto '>
        <Navbar refresh={refresh} />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login
            setRefresh={setRefresh}
            refresh={refresh}
          />} />

          <Route path='/register' element={<Register
            setRefresh={setRefresh}
            refresh={refresh}
          />} />

          <Route path='/house/:id' element={<HouseDetails />} />
          <Route path='/book/:id' element={<BookHouseForm />} />

          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard
                setRefresh={setRefresh}
                refresh={refresh}
              />
            </RequireAuth>
          }>
            <Route index element={<Bookings />} />
            <Route path='houses' element={<Houses />} />
            <Route path="houses/add-new" element={<AddNewHouse />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
