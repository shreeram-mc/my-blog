import React, { Component } from 'react'
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class AddArticle extends Component {
    constructor(props) {
        super(props);        
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(event) {
        event.preventDefault();

        this.props.addArticle({ name:this.refs.name.value, text: this.refs.text.value, upvotes:0});

    }

    render() {
         
        return ( 
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>                    
                    <input type="text" id="title" className="form-control" ref="name" placeholder="Enter the title"/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" ref="text" />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" size="lg" type="submit" active>
                        Add Article
                </Button>{' '}
                    <Button variant="secondary" size="lg" active>
                        Cancel
                </Button>
                </Form.Group>
            </Form>
        )
    }
}

export default connect(null, mapDispatchToProps)(AddArticle);