import { Navigation } from "./Component/Navigation";
import OrganizationPage from "./Component/OrganizationPage";
import {Routes, Route} from 'react-router-dom'
import Contract from "./Component/Contract";
import Order from './Component/Order'


function App() {


  return (
    <>
    <Navigation/>
    <div className="container mx-auto  pt-5">
      <Routes>
       <Route path = '/' element = {<OrganizationPage/>} />
       <Route path = '/contract' element = {<Contract/>} />
       <Route path = '/orders' element = {<Order/>} />
        </Routes>
      
    </div>
    </>
  );
}

export default App;
