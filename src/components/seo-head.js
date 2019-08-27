import React, { Component } from "react";
import {Helmet} from 'react-helmet';

class SeoHead extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
        }
        
    }

    render() { 
        console.log(this.props.seo);
        return(
            <Helmet>
                {
                    Object.values(this.props.seo).map(function(meta , index) {
                        var seoMetaTag = '';
                        var titleTag = '';
                        if( Object.keys(meta)[0] === 'name' ){
                            seoMetaTag = '<meta name="'+meta.name+'" content="'+meta.content+'"/>';  
                        }else if( Object.keys(meta)[0] === 'property' ){
                            seoMetaTag = '<meta property="'+meta.property+'" content="'+meta.content+'"/>';
                        }else{
                            seoMetaTag = ''; 
                        }

                        if( meta.property === 'og:title' ){
                            titleTag = '<title>'+meta.content+'</title>';
                        }else{
                            titleTag = '';
                        }

                        return(
                            <div key={index}>{titleTag}{seoMetaTag}</div>
                        )
                    })
                }
            </Helmet>
        )
    }

}

export default SeoHead;