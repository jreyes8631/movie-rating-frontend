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
    poster: '',
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
   const formData = new FormData()
   formData.append('event[title]', form.title.value);
   formData.append('event[genre]', form.genre.value);
   formData.append('event[classification]', form.classification.value);
   formData.append('event[duration]', form.duration.value);
   formData.append('event[release_date]', form.release_date.value);
   formData.append('event[director]', form.director.value);
   formData.append('event[description]', form.description.value);
   formData.append('event[poster]', form.poster.files[0], form.poster.value);
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
                 
                    <p className="h-8 pl-4 text-red-400">{this.state.errors.title}</p>
                  <label className=" w-full boder p-2 my-2 block uppercase"> Movie Name</label>
                    <input 
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    placeholder="Title"
                    className="w-full border p-4 my-4"
                    />

                    <p className="h-8 pl-4 text-red-400">{this.state.errors.genre}</p>
                    <label className=" w-full boder p-2 my-2 block uppercase"> Genre</label>
                    <input 
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    onChange={this.handleChange}
                    value={this.state.genre}
                    className="w-full border p-4 my-4"
                    />

                    <p className="h-8 pl-4 text-red-400">{this.state.errors.classification}</p>
                    <label className="w-full boder p-2 my-2 block uppercase"> Classification</label>
                    <input 
                    type="text"
                    name="classification"
                    placeholder="Classification"
                    onChange={this.handleChange}
                    value={this.state.classification}
                    className="w-full border p-4 my-4"
                    />
                    
                    <p className="h-8 pl-4 text-red-400">{this.state.errors.duration}</p>
                    <label className="w-full boder p-2 my-2 block uppercase"> Duration</label>
                    <input 
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        onChange={this.handleChange}
                        value={this.state.duration}
                        className="w-full border p-4 my-4"
                    />

                    <p className="h-8 pl-4 text-red-400">{this.state.errors.release_date}</p>
                    <label className="w-full boder p-2 my-2 block uppercase"> Release date</label>
                    <input 
                        type="date"
                        name="release_date"
                        placeholder="Release Date"
                        onChange={this.handleChange}
                        value={this.state.release_date}
                        className="w-full border p-4 my-4"
                    />
                    
                    <p className="h-8 pl-4 text-red-400">{this.state.errors.director}</p>
                    <label className="w-full p-2 my-2 block uppercase"> Director</label>
                    <input 
                        type="text"
                        name="director"
                        placeholder="Director"
                        onChange={this.handleChange}
                        value={this.state.director}
                        className="w-full border p-4 my-4"
                    />
                    
                    <p className="h-8 pl-4 text-red-400">{this.state.errors.description}</p>
                    <label className="w-full p-2 my-2 block uppercase"> Description</label>
                    <textarea 
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        className="w-full border p-4 my-4"
                    />
                    
                    <label className="w-full p-2 my-2 block uppercase"> Poster</label>
                    <input
                    type="file"
                    name="poster"
                    id="poster"
                    onChange={this.handleChange}
                    value={this.state.poster}
                    className="w-full border p-4 my-4"
                    placeholder="poster"
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

export default connect(null, mapDispatchToProps)(MovieFormContainer)