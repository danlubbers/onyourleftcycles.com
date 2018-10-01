import React, { Component } from 'react';
import * as contentful from 'contentful';

class Blog extends Component {
   
        state = {
            posts: []
        }
        
        client = contentful.createClient({
            space: 'mi63ncym1bm5',
            accessToken: 'bc8f1c5df7025a43ef6477fc5f29a9de736de20bc66378c93fd5674531e5f87e'
        });

        componentDidMount() {
            this.fetchPosts().then(this.setPosts);
        }

        fetchPosts = () => this.client.getEntries();

        setPosts = response => {
            this.setState({posts: response.items})
        }

        render() {
            return (
                <content className='blog-wrapper'>
                    <h1>Blog</h1>
                    <br />
                    { this.state.posts.map(({fields}, i) => 
                    <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
                    
                    )}
                </content>
            )
        
    }
}
 
export default Blog;