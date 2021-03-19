import React, { Component} from 'react';

export default class MovieFormContainer extends Component {
 
  state = {
    title: '',
    genre: '',
    classification: '',
    duration: '',
    release_date: '',
    director: '',
    description: ''
  }

  handleChange = (e) =>{
   this.setState({
       [e.target.name]: e.target.value
   })
  }

  handleSubmit = (e) => {
   e.preventDefault();
   fetch('http://localhost:3001/movies', {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({movie: this.state})
   })

   .then(res => res.json())
   .then(movieJson => {
    debugger
   })

  }

    render(){
        return (
            
            <form onSubmit={this.handleSubmit} className="max-w-6xl mt-16 w-4/6 mx-auto shadow-lg">
                
                <fieldset>
                 <h1 className="w-full p-4 bg-blue-300 mt-4 text-center text-3xl font-semibold mb-2">New Movie</h1>
                    <input 
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    placeholder="Title"
                    className="w-full boder p-4 my-4"
                    />

                    <input 
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    onChange={this.handleChange}
                    value={this.state.genre}
                    className="w-full boder p-4 my-4"
                    />

                    <input 
                    type="text"
                    name="classification"
                    placeholder="Classification"
                    onChange={this.handleChange}
                    value={this.state.classification}
                    className="w-full boder p-4 my-4"
                    />

                    <input 
                    type="text"
                    name="duration"
                    placeholder="Duration"
                    onChange={this.handleChange}
                    value={this.state.duration}
                    className="w-full boder p-4 my-4"
                    />

                    <input 
                    type="date"
                    name="release_date"
                    placeholder="Release Date"
                    onChange={this.handleChange}
                    value={this.state.release_date}
                    className="w-full boder p-4 my-4"
                    />

                    <input 
                    type="text"
                    name="director"
                    placeholder="Director"
                    onChange={this.handleChange}
                    value={this.state.director}
                    className="w-full boder p-4 my-4"
                    />

                    <textarea 
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={this.handleChange}
                    value={this.state.description}
                    className="w-full boder p-4 my-4"
                    />
                </fieldset>

                <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" type="submit"> Add Movie</button>
            </form>
        );
    }
}