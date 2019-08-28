import React, { Component } from "react";
import {Helmet} from 'react-helmet';

class SeoHead extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
            description : '',
            locale : '',
            type : '',
            title : '',
            site_name : '',
            card : ''
        }
        
    }

    componentDidMount(){

        
        
    }

    render() {
        if( typeof this.props.seo[0] === 'object' && this.props.seo[0] !== null ){
            var description = this.props.seo[0].content
        }

        if( typeof this.props.seo[2] === 'object' && this.props.seo[2] !== null ){
            var locale = this.props.seo[2].content
        }

        if( typeof this.props.seo[3] === 'object' && this.props.seo[3] !== null ){
            var type = this.props.seo[3].content
        }

        if( typeof this.props.seo[4] === 'object' && this.props.seo[4] !== null ){
            var title = this.props.seo[4].content
        }

        if( typeof this.props.seo[8] === 'object' && this.props.seo[8] !== null ){
            var card = this.props.seo[8].content
        }
        return(
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta property="og:locale" content={locale} />
                <meta property="og:type" content={type} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta name="twitter:card" content={card} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:title" content={title} />
            </Helmet>
        )
    }

}

export default SeoHead;