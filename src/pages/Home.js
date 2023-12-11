import React, { Fragment } from "react"

import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"

const Home = () => {
    return(
        <Fragment>
            <Announcement />
            <Navbar />
        </Fragment>
    )
}

export default Home
