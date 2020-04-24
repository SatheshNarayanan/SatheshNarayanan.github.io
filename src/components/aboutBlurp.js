import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import Img from 'gatsby-image';
import { Link } from "gatsby"

const AbortBlurp = () => {
    const data = useStaticQuery(graphql`
    query {
      bruceLee: file(relativePath: { eq: "BL.jpg" }) {
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
        <div className='about-blurp'>
            <div className = 'container'>
                <div className="inner-blurp">
                    <div className='content'>
                      <br id = 'my-cool-header'/>
                      <br />
                        <h3 > Ability to Learn and Apply</h3>
                        <p> Completing a Bachelors's Degree in Electrical and Electronics Engineering and 
                          starting a career in the IT industry, I have never been nor I never will be at any 
                          disadvantage as I'm always open to learning new things and applying to the real world. 
                          Driven by the Strong will to achieve greater deeds. 
                          This will of fire will take me to the Skies and beyond.</p>
                        <div className="btn-row">
                        <Link to="/#home"> Go to Top</Link>
                        </div>
                    </div>
                    <div className="images">
                        <div className="top-right">
                            <Img fluid={data.bruceLee.childImageSharp.fluid}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbortBlurp;