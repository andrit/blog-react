import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props)
            .then(() => {
                //blog post cretaed navigate user to index
                this.context.router.push('/');

            });
    }

    render() {
        const { fields:{title, categories, content}, handleSubmit } = this.props;
        //above is equivalent to below commented out
        /*
        const handleSubmit = this.props.handleSubmit;
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;
        */

        return(
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <h3>Create a New Post</h3>
               <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                   <label htmlFor="title">Title</label>
                   <input type="text" name="title" placeholder={title.error} className="form-control" {...title} />
                   <div className="text-help">
                       {title.touched ? title.error : ''}
                   </div>
               </div>
               <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                   <label htmlFor="categories">Categories</label>
                   <input type="text" name="categories" placeholder={categories.error} className="form-control" {...categories} />
                   <div className="text-help">
                       {categories.touched ? categories.error : ''}
                   </div>
               </div>
               <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                   <label htmlFor="content">Content</label>
                   <textarea name="content" placeholder={content.error} className="form-control" {...content} />
                   <div className="text-help">
                       {content.touched ? content.error : ''}
                   </div>
               </div>

               <button type="submit" className="btn btn-primary">Submit</button>
               <Link to="/" className="btn btn-danger">Cancel</Link>
           </form>
        );
    }
}


function validate(values){
    const errors ={};

    if (!values.title){
        errors.title = 'Enter a username';
    }
    if (!values.categories){
        errors.categories = 'Enter a category';
    }
    if (!values.content){
        errors.content = 'Enter a message';
    }

    return errors;
}

//connect: 1st arg is mapStateToProps 2nd is mapDispatchToProps
//reduxForm: 1st arg is form config, 2nd arg is mapStateToProps 3rd is mapDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);

//user types something in.. record on application state
/*
state === {
    form: {
        PostsNewForm: {
            title: '....',
            categories: '...',
            content: '...'
        }
    }
}
    */