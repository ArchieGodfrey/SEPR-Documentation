import React from "react"
import "../layout.css"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default class Dashboard extends React.Component {
    render() {
        return (
           <div>
               <h1>Welcome to Team 11's documentation site</h1>
               <p>Over time we will add details about our project</p>
               <div>
                <Link to="/page2">
                    <Button>Page-2</Button>
                </Link>
               </div>
           </div>
        )
    }
}
