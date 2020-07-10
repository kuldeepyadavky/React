import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css'
import { DISHES } from '../shared/dishes.js';

class Main extends Component {

  constructor(props){
    super(props);

  this.state={
    dishes: DISHES,
		selectedDish: null
    };
  }

	onDishSelect(dishId) {
			this.setState({ selectedDish: dishId });
	}

  render(){
  return (
    <div className="App">
      <Header />
     <Menu dishes={this.state.dishes}
		 onClick={(dishId) => this.onDishSelect(dishId)}
		 />
		 <DishDetail
		  dishes={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      <Footer />
    </div>

  );
}
}

export default Main;
