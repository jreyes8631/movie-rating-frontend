import React, { Component} from 'react';

export default class NewReviewContainer extends Component {


    state = {
        comment: "",
        rating: ""
    }
  
   handleChange = (e) =>{
   this.setState({
       [e.target.name]: e.target.value
   })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const movieId = this.props.match.params.movie_id
    fetch(`http://localhost:3001/movies/${movieId}/reviews`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({review: this.state})
    })
    

    .then(res => res.json())
    .then(reviewJson => {
        console.log(reviewJson);
       this.props.history.push(`/movies/${movieId}/reviews`) 
   })
   

  }
    

    render(){
        return (
            
            <form onSubmit={this.handleSubmit} className="max-w-6xl mt-16 w-4/6 mx-auto shadow-lg">
                
                <fieldset>
                 <h1 className="w-full p-4 bg-blue-300 mt-4 text-center text-3xl font-semibold mb-2">New Review</h1>
                    <label htmlFor="comment" className="w-full p-2 my-2 block uppercase"> Comment</label>
                    <input 
                        type="text"
                        name="comment"
                        id="comment"
                        placeholder="comment"
                        onChange={this.handleChange}
                        value={this.state.comment}
                        className="w-full border-2 p-4 my-4"
                    />
                </fieldset>

                <fieldset>

                    <label htmlFor="rating" className="w-full p-2 my-2 block uppercase"> Rating</label>
                    <input 
                        type="text"
                        name="rating"
                        id="rating"
                        placeholder="rating"
                        onChange={this.handleChange}
                        value={this.state.rating}
                        className="w-full border-2 p-4 my-4"
                    />
                </fieldset>
                
                <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" type="submit"> Add Review</button>
            </form>
        );
    }

}