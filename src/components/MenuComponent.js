import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';
import DishDetail from './DishdetailComponent';


        function RenderMenuItem({dish, onClick}){
          return(
            <Card  key={dish.id} onClick={() => onClick(dish.id)} >
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                <CardBody  body className="ml-5">
                <CardImgOverlay body className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                </CardBody>
            </Card>
          );
        }

        const Menu = (props) => {

          const menu = props.dishes.map((dish) => {
              return (
                  <div className="col-12 col-md-5 m-1">
                  <RenderMenuItem dish={dish} onClick={props.onClick} />

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





export default Menu;
