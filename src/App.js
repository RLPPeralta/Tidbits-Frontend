import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import AddRecipe from './components/AddRecipe';
import RecipePage from './components/RecipePage';
import ContinentPage from './components/ContinentPage';
import Asia from './components/Asia';
import Africa from './components/Africa';
import NorthAmerica from './components/NorthAmerica';
import SouthAmerica from './components/SouthAmerica';
import Antarctica from './components/Antarctica';
import Europe from './components/Europe';
import Australia from './components/Australia';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path="/signin" element={ <SignIn /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/profile/:id" element={ <EditProfile /> } />
            <Route path='/recipe/add' element={ <AddRecipe />}/>
            <Route path='/recipe' elemet={ <RecipePage /> }/>
            <Route path='/continent' element={ <ContinentPage />}/>
            <Route path='/asia' element={ <Asia />}/>
            <Route path='/africa' element={ <Africa />}/>
            <Route path='/northamerica' element={ <NorthAmerica />}/>
            <Route path='/southamerica' element={ <SouthAmerica />}/>
            <Route path='/antarctica' element={ <Antarctica />}/>
            <Route path='/europe' element={ <Europe />}/>
            <Route path='/australia' element={ <Australia />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
