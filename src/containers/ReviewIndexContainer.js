import React, { Component} from 'react';
import ReviewList from '../components/ReviewList';

export default class ReviewIndexContainer extends Component {
    state = {
       reviews: [],
       loading: true
    }

    componentDidMount() {
     fetch('http://localhost:3001/reviews', { 
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         }
     })

       .then(res => res.json())
       .then(reviewJson => {
        this.setState({
            reviews: reviewJson,
            loading: false
        })
       })
    }

    render(){
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
               { this.state.loading ? 'Loading content' : < ReviewList reviews={this.state.reviews}/>}
            </section>
        )
    }


}