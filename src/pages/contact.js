import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby";

export default ({data}) => {
    return (
        <div className="siteWrap">
            {data.allWordpressAcfOptions.edges.map(node=>(
                <Header url={node.node.options.site_logo.source_url} alt={node.node.options.site_logo.alt_text}></Header>
            ))}            

            {data.allWordpressAcfOptions.edges.map(node=>(
                <Footer url={node.node.options.small_logo.source_url} alt={node.node.options.small_logo.alt_text} instagram={node.node.options.instagram} twitter={node.node.options.twitter} facebook={node.node.options.facebook} ></Footer>
            ))}
        </div>
    )
};

export const query = graphql`
{
    allWordpressAcfOptions {
      edges {
        node {
          options {
            site_logo {
              source_url
              alt_text
            }
            small_logo{
              source_url
              alt_text
            }
            instagram
            twitter
            facebook
          }
        }
      }
    }
}`