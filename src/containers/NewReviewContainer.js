import React, { Component} from 'react';

export default class NewReviewContainer extends Component {
  
    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const body = new FormData();
        body.append('review[comment]', form.name.value);
        body.append('review[comment]', form.name.value);
        debugger
    }
    

    render(){
        return (
            
            <form onSubmit={this.handleSubmit} className="max-w-6xl mt-16 w-4/6 mx-auto shadow-lg">
                
                <fieldset>
                 <h1 className="w-full p-4 bg-blue-300 mt-4 text-center text-3xl font-semibold mb-2">New Review</h1>
                    <label htmlFor="comment" className="w-full p-2 my-2 block uppercase"> Comment</label>
                    <input 
                        type="text"
                        name="Comment"
                        id="comment"
                        placeholder="Comment"
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
                        className="w-full border-2 p-4 my-4"
                    />
                </fieldset>
                
                <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" type="submit"> Add Review</button>
            </form>
        );
    }

}