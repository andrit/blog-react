import React, { Component } from 'react';
import { connect } from 'react-redux';
/*import { bindActionCreators } from 'redux';*/
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {

    componentWillMount() {
        console.log('good time call action creator for FETCH_POSTS');
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }

    //create a foreach of renderPosts into a data object wherein I can pull the title and other 'refs/props/state'
    //to do  create blogname var for injection into jumbotron
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <div class="jumbotron">
                    <h1><strong>Blog Name---azmakarusian</strong></h1>
                </div>

                <section className="well">
                    <h3 className="title-header">Posts</h3>
                    <ul className="list-group">
                        {this.renderPosts()}
                    </ul>
                </section>
            </div>
        );
    }
}

/*
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchPosts }, dispatch);

}
*/

function mapStateToProps(state){
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);