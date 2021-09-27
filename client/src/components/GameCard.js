import AwayInfo from "./AwayInfo"
import HomeInfo from "./HomeInfo"
// import { Link } from 'react-router-dom'
// import CommentPage from "./CommentPage"
import { useState, useEffect } from 'react'


function GameCard({ nflGame, user }) {
    const awayTeam = nflGame.away_team
    const awayMl = nflGame.away_ml
    const awaySpr = nflGame.away_spread
    const awayPrice =  nflGame.away_price
    const homeTeam = nflGame.home_team
    const homeMl = nflGame.home_ml
    const homeSpr = nflGame.home_spread
    const homePrice =  nflGame.home_price



    return (
        <div>
            <AwayInfo awayTeam={awayTeam} awayMl={awayMl} awaySpr={awaySpr} awayPrice={awayPrice} />
            @
            <HomeInfo homeTeam={homeTeam} homeMl={homeMl} homeSpr={homeSpr} homePrice={homePrice}/>
            {/* <CommentPage homeSpr={homeSpr} awaySpr={awaySpr} user={user}/> */}
        </div>
    )
}

export default GameCard
