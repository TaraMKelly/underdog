// import NFLCard from "./NFLCard"
import { useState, useEffect } from 'react'

function NFLContainer() {
    const [games, setGames] = useState([])
    const odds_url = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${process.env.REACT_APP_ODDS}&regions=us&markets=h2h,spreads&oddsFormat=american`

    useEffect(() => {
        fetch(odds_url)
            .then(res => res.json())
            .then((data) => setGames(data))
    }, [])
    console.log(games)

    return (
        <div>
            <h1>NFL</h1>
            {/* { games.map(game => <NFLCard game ={ game } /> */}
        </div>
    )
}

export default NFLContainer
