import React from "react";
import './Card.css'

const Card = ({name, id}) => {
    //const {name, id} = props
    return(
        <div className="bg-washed-red dib br3 pa3 ma2 tc mw5 grow bw2 shadow-3">
            <img className="bg-light-pink br-100" src={`https://robohash.org/${id}?size=200x200`} alt=""/>
            <div>
                <h2 className="f4 b">{name}</h2>
                <p>¡Hola, yo me llamo {name}!</p>
            </div>
        </div>
    );
}

export default Card;