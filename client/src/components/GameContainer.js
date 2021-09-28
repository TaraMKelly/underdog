import { useEffect, useState } from "react"
import GameCard from "./GameCard"

function GameContainer({user}) {
    const [nflGames, setGames] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('/games')
            .then(res => res.json())
            .then((data) => setGames(data))
    }, [])

    useEffect(() => {
        fetch('/comments')
            .then(res => res.json())
            .then((data) => setComments(data))
    }, [])
    console.log(comments)

    return (
        <div>
            <h1>NFL</h1>
            { nflGames.map(nflGame => <GameCard key={nflGame.id} user={user} nflGame ={nflGame} comments={comments} setComments={setComments} />) }
        </div>
    )
}

export default GameContainer
