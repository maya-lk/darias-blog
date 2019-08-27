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
        this.setState({
            // description : this.props.seo[0].content,
            // locale : this.props.seo[2].content,
            // type : this.props.seo[3].content,
            // title : this.props.seo[4].content,
            // card : this.props.seo[8].content
        })
    }

    render() {
        //var testt = this.props.seo[0];
        return(
            <Helmet>
                {
                    console.log(this.props.seo[0])
                }
                <title>{this.state.title}</title>
                <meta name="description" content={this.state.description}/>
                <meta property="og:locale" content={this.state.locale} />
                <meta property="og:type" content={this.state.type} />
                <meta property="og:title" content={this.state.title} />
                <meta property="og:description" content={this.state.description} />
                <meta name="twitter:card" content={this.state.card} />
                <meta name="twitter:description" content={this.state.description} />
                <meta name="twitter:title" content={this.state.title} />
            </Helmet>
        )
    }

}

export default SeoHead;