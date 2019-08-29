import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

class BlogSection extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
        }
        
      }

    render() {
        const { blogTitles , blogContent , blogPosts } = this.props;

        return (
            <section className="sectionWrap d-flex justify-content-between flex-wrap" id="blogSecWrap">
                <div className="blogSecCont">
                    <Nav as="ul">
                        {
                            Object.values(blogTitles).map(function(content , index) {
                                var contClass = '';
                                var dotIcon = '';
                                if( index%2 ){
                                    contClass = 'odd';
                                    dotIcon = <FontAwesomeIcon icon={faCircle} />;
                                }else{
                                    contClass = 'even';
                                    dotIcon = '';
                                }
                                return(
                                    <Nav.Item as="li" key={index} className={contClass}>
                                        {dotIcon}
                                        <span>{content.title}</span>
                                        {dotIcon}
                                    </Nav.Item>
                                )
                            })
                        }
                    </Nav>
                    <div dangerouslySetInnerHTML={{__html: blogContent}} />
                </div>
                <div className="blogPostWrap">
                    <div className="postsWrapper">
                        {
                            Object.values(blogPosts).map(function(post){
                                return(
                                    <div className="blogPost" key={post.id}>
                                        <div className="insidePost">
                                            <div className="postImg">
                                                <img src={post.fimg_url} alt={post.title.rendered} />
                                            </div>
                                            <h3>{post.title.rendered}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>            
            </section>
        )
    }

}

export default BlogSection;