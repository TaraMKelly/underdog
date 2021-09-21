// import { useState, useEffect } from 'react'


function NFLCard( {game} ) {
    console.log(game)
    return (
        <div>
            <h3>{game.away_team} vs {game.home_team}</h3>
        </div>
    )
}

export default NFLCard
