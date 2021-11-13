import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthProvider from './components/Context/AuthProvider'
import Dashboard from './components/Dashboard/Dashboard'
import MyOrder from './components/Dashboard/Dashboard/MyOrder'
import Pay from './components/Dashboard/Dashboard/Pay'
import Footer from './components/Home/Footer/Footer'
import Home from './components/Home/Home/Home'
import Nav from './components/Home/Nav/Nav'
import Login from './components/Login/Login/Login'
import SignUp from './components/Login/SignUp/SignUp'
import MoreCars from './components/MoreCars/MoreCars'
import News from './components/News/News'
import NotFound from './components/NotFound/NotFound'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Purchase from './components/Purchase/Purchase'
import AddProduct from './components/Dashboard/Dashboard/AddProduct'
import Review from './components/Dashboard/Dashboard/Review'
import ManageOrders from './components/Dashboard/Dashboard/ManageOrders'
// import MakeAdmin from './components/Dashboard/Dashboard/MakeAdmin'
import ManageProducts from './components/Dashboard/Dashboard/ManageProducts'
import MakeAdmin from './components/DashboardAdmin/Dashboard/MakeAdmin'
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/news'>
            <News />
          </Route>
          <Route exact path='/news'>
            <News />
          </Route>
          <Route exact path='/moreCars'>
            <MoreCars />
          </Route>
          <PrivateRoute exact path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path='/admin'>
            <DashboardAdmin />
          </PrivateRoute>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signUp'>
            <SignUp />
          </Route>
          <PrivateRoute path='/purchase/:carDataId'>
            <Purchase />
          </PrivateRoute>
          <PrivateRoute path='/pay'>
            <Pay />
          </PrivateRoute>
          <PrivateRoute path='/myOrders'>
            <MyOrder />
          </PrivateRoute>
          <PrivateRoute path='/addProduct'>
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path='/review'>
            <Review />
          </PrivateRoute>
          <PrivateRoute path='/manageOrder'>
            <ManageOrders />
          </PrivateRoute>
          <PrivateRoute path='/makeAdmin'>
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path='/manageProducts'>
            <ManageProducts />
          </PrivateRoute>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
