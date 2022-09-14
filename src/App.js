import { Navigation } from "./Component/Navigation";
import OrganizationPage from "./Component/OrganizationPage";
import { Routes, Route } from 'react-router-dom'
import ContractPage from "./Component/ContractPage";
import OrderPage from './Component/OrderPage'
import React from 'react'


function App() {

  return (
    <>
      <Navigation />
      <div className="w-screen mx-auto">
        <Routes>
          <Route path='/' element={<OrganizationPage />} />
          <Route path='/contract/:id' element={<ContractPage />} />
          <Route path='/contract' element={<ContractPage />} />
          <Route path='/orders/:id' element={<OrderPage />} />
          <Route path='/orders' element={<OrderPage />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
