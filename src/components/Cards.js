import React, { useState, useEffect } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import IconButton from '@material-ui/core/IconButton';


export default function Cards({ keyID, avatarImg, name, comics, events, series, listFav }) {
    const [likeState, setLikeState] = useState(false);
    const [idFav, setIdFav] = useState('');

    function clickFavIcon() {
        setLikeState(!likeState);
        setIdFav(keyID)
        console.log(idFav)

        listFav.push(idFav)
    }

    useEffect(() => {

    })

    return (
        <div className="containerCard" key={keyID}>
            <div className="columnCard">
                <p className="placeholder" style={{padding: 0}}>Favorito</p>
                <IconButton aria-label="fav" color="secondary" className="buttonFav" onClick={() => clickFavIcon()}>

                    {likeState ? (
                        <MdFavorite size={30}  />
                    ) : (
                        <MdFavoriteBorder size={30} />
                    )}
                </IconButton>

            </div>
            <div className="columnCard">
                <img className="avatar-img" src={avatarImg} alt="avata do person" />
            </div>
            <div className="columnCard">
                <p className="placeholder">Personagem</p>
                <h4>{name}</h4>

            </div>
            <div className="columnCard">
                <p className="placeholder">Quadrinhos</p>
                <h4>{comics}</h4>
            </div>
            <div className="columnCard">
                <p className="placeholder">Eventos</p>
                <h4>{events}</h4>
            </div>
            <div className="columnCard">
                <p className="placeholder">Series</p>
                <h4>{series}</h4>
            </div>
        </div>
    )
}
