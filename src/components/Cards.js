import React, { useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

export default function Cards({ key, avatarImg, name, comics, events, series }) {
    const [likeState, setLikeState] = useState(false);


    return (
        <div className="containerCard" key={key}>
            <div className="columnCard">
                <p className="placeholder">Favorite</p>
                <a
                    onClick={async (e) => {
                        setLikeState(!likeState);
                    }}>

                    {likeState ? (
                        <MdFavorite size={30} />
                    ) : (
                        <MdFavoriteBorder size={30} />
                    )}
                </a>

            </div>
            <div className="columnCard">
                <img className="avatar-img" src={avatarImg} alt="avata do person" />
            </div>
            <div className="columnCard">
                <p className="placeholder">Name</p>
                <h4>{name}</h4>
            </div>
            <div className="columnCard">
                <p className="placeholder">Comics</p>
                <h4>{comics}</h4>
            </div>
            <div className="columnCard">
                <p className="placeholder">Events</p>
                <h4>{events}</h4>
            </div>
            <div className="columnCard">
                <p className="placeholder">Series</p>
                <h4>{series}</h4>
            </div>
        </div>
    )
}
