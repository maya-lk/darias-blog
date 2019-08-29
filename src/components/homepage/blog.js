import React, { Component } from "react";

class BlogSection extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
        }
        
      }

    render() {
        return (
            <section className="sectionWrap d-flex justify-content-between flex-wrap" id="blogSecWrap">
                <div className="blogSecCont">
                    {/* <h2><span>Meet</span> Daria</h2>
                    <div dangerouslySetInnerHTML={{__html: this.props.homeParams.meet_daria_content}} /> */}
                </div>
                <div className="blogPostWrap"></div>            
            </section>
        )
    }

}

export default BlogSection;