import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2">
            <input 
            className="bg-washed-green w-20 ph2 pv2 ba br3 tl" 
            type="search" 
            placeholder="Busca un robot" 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;