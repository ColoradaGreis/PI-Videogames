
import React from 'react';
// import { NavLink } from 'react-router-dom';

class CardVideogame extends React.Component{

    render(){
        return (
            <div>
                <img src={this.props.img} alt='img not found' width='200px' height='250px' />
                <div>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.genres}</p>
                    <p>{this.props.rating}</p>
                </div>
            </div>
        )
    }
}

export default CardVideogame