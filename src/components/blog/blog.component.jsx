import React from "react";
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectBlogTitles , selectBlogSectionContent , selectBlogPosts } from '../../redux/home/home.selectors';

const BlogSection = ({ blogTitles , blogSectionContent , blogPosts }) => (
    <section className="sectionWrap d-flex justify-content-between flex-wrap" id="blogSecWrap">
        <div className="blogSecCont">
            <Nav as="ul">
                {
                    (blogTitles)?
                    blogTitles.map(function(content , index) {
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
                                <span>{content}</span>
                                {dotIcon}
                            </Nav.Item>
                        )
                    })
                    : ''
                }
            </Nav>
            <div dangerouslySetInnerHTML={{__html: blogSectionContent}} />
        </div>
        <div className="blogPostWrap">
            <div className="postsWrapper">
                {
                    (blogPosts)?
                    blogPosts.map(function(post){
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
                    : ''
                }
            </div>
        </div>            
    </section>
)

const mapStateToProps = createStructuredSelector({
    blogTitles : selectBlogTitles,
    blogSectionContent : selectBlogSectionContent,
    blogPosts : selectBlogPosts
});

export default connect(mapStateToProps)(BlogSection);