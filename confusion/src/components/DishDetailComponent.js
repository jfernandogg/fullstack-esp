import React, { Component } from "react";
import { Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class   DishDetailComponent extends Component {

    constructor(props){
        super(props);
    }

    render(props) {
        if(this.props!=null) {
            console.log("props is not null")
            return(
                <div>
                    {this.renderDish(this.props)}
                </div>
            );
        }
        console.log("render on dishdetailcomponent")
        return(<div></div>);
    }
    renderDish(props) {
        var dish = props.selectedDish;
        var comments = "";

        console.log("renderdish");
        if(dish != null){
            comments = dish.comments.toString();
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
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );

        }
        else
            return(
                <div className="col-12 col-md-5 m-1"></div>
            );
    }

    renderComments(comments){
        if (comments != null){
            const rc = comments.map((comment) => (
                <p key={comment.id}>
                    {comment.comment}<br/>
                    {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} - Rating: {comment.rating}
                </p>
            ));
            return rc;
        }
        const rc = (<div></div>);
        return rc;
    }
}

export default  DishDetailComponent;