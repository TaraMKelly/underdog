import AwayInfo from "./AwayInfo"
import HomeInfo from "./HomeInfo"
// import { useState, useEffect } from 'react'


function NFLCard({ game }) {
    let bookMakers = game.bookmakers.map(bookmaker => bookmaker)
    let unibet = bookMakers[0]
    let uniMarket = unibet.markets.map(market => market)
    let moneyLine = uniMarket[0]
    let spread = uniMarket[1]
    let mLOutcomes = moneyLine.outcomes.map(outcome => outcome)
    let awayML = mLOutcomes[0]
    let homeML = mLOutcomes[1]
    let spreadOutcomes = spread.outcomes.map(outcome => outcome)
    let awaySpr = spreadOutcomes[0]
    let homeSpr = spreadOutcomes[1]


    return (
        <div>
            <AwayInfo awayML={awayML} awaySpr={awaySpr}/>
            @
            <HomeInfo homeML={homeML} homeSpr={homeSpr}/>
            <h3>a link to discussion</h3>
        </div>
    )
}

export default NFLCard
