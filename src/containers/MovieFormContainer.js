import React, { Component} from 'react';
import {connect} from 'react-redux';
import {createMovie} from '../actions/movies'

 class MovieFormContainer extends Component {
 
  state = {
    title: '',
    genre: '',
    classification: '',
    duration: '',
    release_date: '',
    director: '',
    description: '',
    errors: {}
  }

  handleChange = (e) =>{
   this.setState({
       [e.target.name]: e.target.value
   })
  }

  handleSubmit = (e) => {
   e.preventDefault();
  this.props.dispachedCreateMovie(this.state).then(movieJson => {
    this.props.history.push('/')
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
            
            <form onSubmit={this.handleSubmit} className="max-w-6xl mt-16 w-4/6 mx-auto shadow-lg">
                
                <fieldset>
                 <h1 className="w-full p-4 bg-blue-300 mt-4 text-center text-3xl font-semibold mb-2">New Movie</h1>
                  <label className=" w-full boder p-2 my-2 block uppercase"> Movie Name</label>
                    <input 
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    placeholder="Title"
                    className="w-full border p-4 my-4"
                    />
                  
                    <label className=" w-full boder p-2 my-2 block uppercase"> Genre</label>
                    <input 
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    onChange={this.handleChange}
                    value={this.state.genre}
                    className="w-full border p-4 my-4"
                    />
                    
                    <label className="w-full boder p-2 my-2 block uppercase"> Classification</label>
                    <input 
                    type="text"
                    name="classification"
                    placeholder="Classification"
                    onChange={this.handleChange}
                    value={this.state.classification}
                    className="w-full border p-4 my-4"
                    />
                    
                    <label className="w-full boder p-2 my-2 block uppercase"> Duration</label>
                    <input 
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        onChange={this.handleChange}
                        value={this.state.duration}
                        className="w-full border p-4 my-4"
                    />

                    <label className="w-full boder p-2 my-2 block uppercase"> Release date</label>
                    <input 
                        type="date"
                        name="release_date"
                        placeholder="Release Date"
                        onChange={this.handleChange}
                        value={this.state.release_date}
                        className="w-full border p-4 my-4"
                    />

                    <label className="w-full p-2 my-2 block uppercase"> Director</label>
                    <input 
                        type="text"
                        name="director"
                        placeholder="Director"
                        onChange={this.handleChange}
                        value={this.state.director}
                        className="w-full border p-4 my-4"
                    />

                    <label className="w-full p-2 my-2 block uppercase"> Description</label>
                    <textarea 
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        className="w-full border p-4 my-4"
                    />

                </fieldset>

                <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" type="submit"> Add Movie</button>
            </form>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispachedCreateMovie: (fromData) => dispatch(createMovie(fromData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieFormContainer)