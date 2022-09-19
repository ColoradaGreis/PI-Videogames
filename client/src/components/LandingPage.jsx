import React from "react";
import {Link} from "react-router-dom"

function LandingPage() {
  return (
    <div>
        <h1>Welcome</h1>
        <Link to="./home">
            <button>Let's Begin</button>
        </Link>
    </div>
  )
}

export default LandingPage