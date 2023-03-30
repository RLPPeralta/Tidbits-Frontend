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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
