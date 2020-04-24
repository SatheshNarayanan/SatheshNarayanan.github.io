import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import Img from 'gatsby-image';
import { Link } from "gatsby"

const Education = () => {
    const data = useStaticQuery(graphql`
    query {
      college: file(relativePath: { eq: "esvc18.jpg" }) {
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
        <div className='education'>
            <div className = 'container'>
                <div className="inner-education">
                    <div className='content-education'>
                    <br id = 'education'/>
                      <br />
                        <h3> Education</h3>
                        <p> I completed my Bachelors's Degree in Electrical and Electronics Engineering ( 2014 - 2018 ) 
                            from Ramco Institue of Technology with a score of 75.4%. I have been part of many co-curricular 
                            and extra-curricular activities, like actively participating in Language club activities and 
                            leading the Electrical Team for building Electric Solar vehicles for 2 years. We actually came 
                            as the 1st runner up in 2017 and won Futuristic Award in the year 2018 in Asian level event 
                            ESVC ( Electric Solar Vehicle Championship) conducted by ISIE (Imperial Society of Innovative 
                            Engineers).  </p>
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

export default Education;