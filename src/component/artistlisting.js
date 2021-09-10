import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import {Link} from 'react-router-dom';

const ArtistListing = (props) =>{
    const renderlist = ({datalist})=>{
        if(datalist){
            return datalist.map((item)=>{
                return(
                    <Link to={`/Content/$(item.name)`} key={item.name}>
                        <div className="card col-md-2">
                            <div className="row">
                                <img className="card-image-top" src={`/images/covers/${item.content-items.content.poster-image}.jpg`}/>
                                <span className="topTemp">
                                    {item.name}

                                </span>
                        </div>
                    </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div>
            {renderlist(props)}
        </div>
    )
}

export default ArtistListing;