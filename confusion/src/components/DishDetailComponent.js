import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function renderDish({dish}) {

        console.log("renderdish");
        if(dish != null){
            //comments = dish.comments.toString();
            return(
                <div className="row">
                    <div className="col-6 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-6 col-md-5 m-1">
                        <h4>Comments</h4>
                        {renderComments(dish.comments)}
                    </div>
                </div>
            );

        }
        else
            return(
                <div className="col-12 col-md-5 m-1"></div>
            );
    }

    function renderComments(comments) {
        if (comments != null){
            console.log("No es null comments")
            const rc = comments.map((comment) => (
                <p key={comment.id}>
                    {comment.comment}<br/>
                    {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} - Rating: {comment.rating}
                </p>
            ));
            return rc;
        }
        else {
            console.log("Comments es null");
        }
        const rc = (<div></div>);
        return rc;
    }

    const  DishDetail = (props) => {
            return(
                <div>
                    {renderDish(props)}
                </div>
            );
    }

export default  DishDetail;