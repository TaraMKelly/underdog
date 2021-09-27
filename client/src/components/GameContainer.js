import { useEffect, useState } from "react"
import GameCard from "./GameCard"

function GameContainer({user}) {
    const [nflGames, setGames] = useState([])

    useEffect(() => {
        fetch('/games')
            .then(res => res.json())
            .then((data) => setGames(data))
    }, [])

    return (
        <div>
            <h1>NFL</h1>
            { nflGames.map(nflGame => <GameCard key={nflGame.id} user={user} nflGame ={nflGame} />) }
        </div>
    )
}

export default GameContainer
