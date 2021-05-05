import React, { useState, useEffect } from 'react'

export default function Header({ countFav }) {

    useEffect(() => {
        console.log(countFav)
    })
    
    return (
        <div className="containerHeader">
            <div>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png'} className="iconMarvel" alt="logo da marvel" />
            </div>
            <h4>PersonLike</h4>
            <h4>Favoritos ({countFav})</h4>
        </div>
    )
}
