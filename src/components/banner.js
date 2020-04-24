import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import Img from 'gatsby-image';

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "k.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1700,quality : 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frontend: file(relativePath: { eq: "fe.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000,quality : 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      server: file(relativePath: { eq: "be.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000,quality : 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className='banner'>
            <div className = 'container'>
                <div className="row">
                <div className="main-text"> Sathesh Narayanan </div>
               
                <div className="main-image">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </div>
                
                </div>
                <div className='scroll'><span> scroll down</span></div>
            </div>
            <div className="fixed-misc">Full Stack Developer</div>
        </div>
    )
}

export default Banner;