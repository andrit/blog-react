import React, { Component } from 'react';
import { connect } from 'react-redux';
/*import { bindActionCreators } from 'redux';*/
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {

    componentWillMount(){
        console.log('good time call action creator for FETCH_POSTS');
        this.props.fetchPosts();
    }

    render() {
        return(
            <div>List of Blog posts</div>
        );
    }
}

/*
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchPosts }, dispatch);

}
*/

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);