import React, { Component } from 'react'
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { createBrowserHistory } from 'history'
import Login from './pages/Login';
import Register from './pages/Register'
import Homepage from './pages/Homepage';
import Reservation from './pages/Reservation';
import VehicleType from './pages/VehicleType';
import History from './pages/History';
import VehicleDetail from './pages/VehicleDetail';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Vehicles from './pages/Vehicles';
import PopularInTown from './pages/PopularInTown';
import NotFound from './pages/NotFound';
import PopularCar from './pages/PopularCar';
import ListOfPopularBike from './pages/ListOfPopularBike';
import ListOfPopularCar from './pages/ListOfPopularCar';
import ListOfPopularMotorbike from './pages/ListOfPopularMotorbike';
import Payment from './pages/Payment';

export default class App extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  history = createBrowserHistory()
  render(){
    return (
      <HistoryRouter history={this.history}>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="forgot-password" element={<ForgotPassword/>} />
        <Route path="vehicle-list" element={<VehicleType/>} />
        <Route path="popular-in-town" element={<PopularInTown/>} />
        <Route path="popular-car" element={<ListOfPopularCar />} />
        <Route path="popular-motorbike" element={<ListOfPopularMotorbike />} />
        <Route path="popular-bike" element={<ListOfPopularBike />} />
        <Route path="vehicles" element={<Vehicles/>}/>
        <Route path="vehicles/:id" element={<VehicleDetail history={this.history} /> } />
        <Route path="vehicles/car" element={<PopularCar />} />
        <Route path="reservation/:id" element={<Reservation/>} />
        <Route path="payment/:id" element={<Payment />} />
        <Route path="history" element={<History/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="404" element={<NotFound/>} />
  
      </Routes></HistoryRouter>
    );
  }
}
