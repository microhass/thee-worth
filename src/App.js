import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Error from './components/Error';

import './App.css';
import CompanyDetails from './components/companies/CompanyDetails';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route index path='/home' element={<Home />} />
        <Route
          index
          path='/company/:companyCode'
          element={<CompanyDetails />}
        />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
