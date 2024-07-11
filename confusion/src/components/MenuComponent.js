import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetailComponent  from '../components/DishDetailComponent';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
      this.setState({ selectedDish: dish });
      console.log("onDishSelect")
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  key={dish.id.toString()} onClick={() => this.onDishSelect(dish)} className="col-12 col-md-5 m-1">
                <Card >
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.id} - {dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        console.log("render on menucomponent");
        return (
          <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
              <div  className="col-12 m-1">
                <DishDetailComponent selectedDish={this.state.selectedDish}></DishDetailComponent>
              </div>
            </div>
          </div>
        );
    }
}

export default Menu;