import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import OrderInformation from './Components/CustomerAllInformation/OrderInformation/OrderInformation';
import ServiceList from './Components/CustomerAllInformation/ServiceList/ServiceList';
import ReviewInformation from './Components/CustomerAllInformation/ReviewInformation/ReviewInformation';
import AdminServiceList from './Components/AdminAllInformation/AdminServiceList/AdminServiceList';
import AdminAddService from './Components/AdminAllInformation/AdminAddService/AdminAddService';
import MakeAdmin from './Components/AdminAllInformation/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({
    name: '',
    email: '',
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
       <Switch>

         <Route exact path="/">
           <Home></Home>
         </Route>

         <Route path="/home">
           <Home></Home>
         </Route>

         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/customerOrder">
          <OrderInformation></OrderInformation>
         </Route>

        <PrivateRoute path="/order">
            <OrderInformation></OrderInformation>
        </PrivateRoute>

         <Route path="/serviceList">
           <ServiceList></ServiceList>
         </Route>

         <Route path="/review">
           <ReviewInformation></ReviewInformation>
         </Route>

         <PrivateRoute path="/admin">
            <AdminServiceList></AdminServiceList>
         </PrivateRoute>

         <Route path="/adminServiceList">
           <AdminServiceList></AdminServiceList>
         </Route>

         <Route path="/adminAddService">
           <AdminAddService></AdminAddService>
         </Route>

        
         <Route path="/adminMakeAdmin">
           <MakeAdmin></MakeAdmin>
         </Route>

         

       </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;
