import * as React from 'react'
import Profile from './profile.js'

export default function Board() {

    const handleClick = (e) => {
        console.log(e.target)
    }

    return (
        <div className='board'>
            <h1 className='leaderboard'>Leaderboard</h1>

            <div className='category'>
                <button onClick={handleClick} data-id="0">Logo</button>
                <button onClick={handleClick} data-id="1">Movie</button>
                <button onClick={handleClick} data-id="2">Drama</button>
                <button onClick={handleClick} data-id="3">Album</button>
                <button onClick={handleClick} data-id="4">Game</button>
            </div>

            <Profile></Profile>

        </div>
    )
}