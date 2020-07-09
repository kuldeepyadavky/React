import React  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderComments({comments}) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(comment.date))
                        }
                    </p>
                </li>
            );
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        );
    }
    function RenderDish({dish}) {

            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );

    }

    const DishDetail = (props) => {
        const dish = props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem = props.renderDish(dish)
        const commentItem = props.rendercomments(dish.comments)
        return (
            <div className='row'>
                {dishItem}
                {commentItem}
            </div>
        );
    }


export default DishDetail;
