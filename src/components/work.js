import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import Img from 'gatsby-image';
import { Link } from "gatsby"

const Work = () => {
    const data = useStaticQuery(graphql`
    query {
      college: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000,quality : 100) {
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
        <div className='career'>
            <div className = 'container'>
                <div className="inner-career">
                    <div className='content-career'>
                    <br id = 'work'/>
                      <br />
                        <h3> Career</h3>
                        <p> I started my Career in Ramco Systems as a SQL Developer in May 2018. 
                          Being in the Customer Technical Support, This role has helped me gain experience 
                          in facing customers directly and in solving Technical issues in a limited time frame. 
                          Have supported US giants such as MJB Wood Group and B.L. Harbert International.  </p>
                        <div className="btn-row">
                        <Link to="/#home"> Go to Top</Link>
                        </div>
                    </div>
                    <div className="images">
                        <div className="top-right">
                            <Img fluid={data.college.childImageSharp.fluid}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;