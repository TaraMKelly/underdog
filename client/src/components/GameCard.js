import AwayInfo from "./AwayInfo"
import HomeInfo from "./HomeInfo"
// import { Link } from 'react-router-dom'
import CommentPage from "./CommentPage"
import { useState, useEffect } from 'react'


function GameCard({ nflGame, user, comments, setComments, handleDeleteComment }) {
    const awayTeam = nflGame.away_team
    const awayMl = parseInt(nflGame.away_ml, 10)
    const awaySpr = parseInt(nflGame.away_spread, 10)
    const awayPrice =  parseInt(nflGame.away_price, 10)
    const homeTeam = nflGame.home_team
    const homeMl = parseInt(nflGame.home_ml, 10)
    const homeSpr = parseInt(nflGame.home_spread, 10)
    const homePrice =  parseInt(nflGame.home_price, 10)

    return (
        <div>
            <AwayInfo awayTeam={awayTeam} awayMl={awayMl} awaySpr={awaySpr} awayPrice={awayPrice} />
            @
            <HomeInfo homeTeam={homeTeam} homeMl={homeMl} homeSpr={homeSpr} homePrice={homePrice} />
            <CommentPage nflGame={nflGame} user={user} handleDeleteComment={handleDeleteComment} comments={comments} setComments={setComments} />
        </div>
    )
}

export default GameCard
