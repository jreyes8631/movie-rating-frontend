import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createReview} from '../actions/reviews'

class NewReviewContainer extends Component {


    state = {
        comment: "",
        rating: "",
        errors: {}
    }
  
   handleChange = (e) =>{
   this.setState({
       [e.target.name]: e.target.value
   })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const formData = new FormData();
    formData.append("review[comment]", form.comment.value);
    formData.append("review[rating]", form.rating.value);
    formData.append("review[movie_id]", this.props.match.params.movie_id);
      this.props.dispachedCreateReview(formData).then(reviewJson => {
        this.props.history.push(`/movies/${this.props.match.params.movie_id}`)
   })

    .catch(errors => {
        this.setState({
            errors
        })
        console.log(errors)
    })


  }


  
    

    render(){
        return (
            <>
            <form onSubmit={this.handleSubmit} className="max-w-6xl mt-16 w-4/6 mx-auto shadow-lg">
                
                <fieldset>
                 <h1 className="w-full p-4 bg-blue-300 mt-4 text-center text-3xl font-semibold mb-2">New Review</h1>
                  <p className="h-8 pl-4 text-red-400">{this.state.errors.comment}</p>
                    <label htmlFor="comment" className="w-full p-2 my-2 block uppercase"> Comment</label>
                    <input 
                        type="text"
                        name="comment"
                        id="comment"
                        placeholder="comment"
                        onChange={this.handleChange}
                        className="w-full border-2 p-4 my-4"
                    />
                </fieldset>

                <fieldset>
                    <p className="h-8 pl-4 text-red-400">{this.state.errors.rating}</p>
                    <label htmlFor="rating" className="w-full p-2 my-2 block uppercase"> Rating</label>
                    <input 
                        type="text"
                        name="rating"
                        id="rating"
                        placeholder="rating"
                        onChange={this.handleChange}
                        className="w-full border-2 p-4 my-4"
                    />
                    
                </fieldset>
                
                <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" type="submit"> Add Review</button>
                 <button className="inline-block border border-blue-500 rounded py-2 px-3 bg-blue-500 text-white mx-0.5" type="button"><Link to={`/`}>CANCEL</Link></button>
            </form>
            
            </>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
  
    return {
        dispachedCreateReview: (formData) => dispatch(createReview(formData))
    }
}

export default connect(null, mapDispatchToProps)(NewReviewContainer)