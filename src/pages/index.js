import React from "react";
import '../styles/styles.scss'

//import components
import Header from '../components/header'
import Banner from '../components/banner'
import AboutBlurp from '../components/aboutBlurp'
import Education from '../components/education'
import Work from '../components/work'

const IndexPage = () => (
<div>
<Header/>
<Banner/>
<AboutBlurp />
<Education />
<Work />
</div>
)

export default IndexPage
