import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);



    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">

                    <Card  key={dish.id} onClick={() => this.props.onClick(dish.id)} >
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody  body className="ml-5">
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;
