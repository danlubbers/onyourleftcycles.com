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

            let blogArray = this.state.posts.map(({fields}, i) => {
                
                return <pre key={i}>

                    <h1 className='contentful-title'>{fields.title}</h1>

                    <h1 className='contentful-description'>
                    
                    {/* {JSON.stringify(fields.content, null, 2)} */}
                    
                    {fields.content}
                    </h1>

                </pre>
            });

            let imagesArray = this.state.posts.map(({fields}, i) => {
                // console.log(fields)
                
                return <div key={i}>
                    
                    {<img className='contentful-image' src={fields.image.fields.file.url} alt=''/>}

                    
                </div>
            });
            

            return (
                <content className='blog-wrapper'>
                    <h1>Blog</h1>
                        <br />
                        {blogArray}
                        {imagesArray}
                </content>
            )
        
    }
}
 
export default Blog;