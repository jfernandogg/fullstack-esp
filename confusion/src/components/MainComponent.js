import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    
    return (
      <div>
        <Header/>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<Menu dishes={this.state.dishes} />} />
          <Route path='*' element={<Navigate to="/home" replace />} />
        </Routes>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer/>
      </div>
    );
  }
}

export default Main;
