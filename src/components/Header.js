import React from 'react'

export default function Header() {
    return (
        <div className="containerHeader">
            <div>
               <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png'} className="iconMarvel" alt="logo da marvel"/>
            </div>
            <h4>PersonLike</h4>
            <h4>Favoritos (0)</h4>
        </div>
    )
}
