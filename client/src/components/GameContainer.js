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

    function handleDeleteComment(id) {
        const removeComment = comments.filter((c) => c.id !==id)
        setComments(removeComment)
    }

    return (
        <div>
            <h1>NFL</h1>
            { nflGames.map(nflGame => <GameCard key={nflGame.id} handleDeleteComment={handleDeleteComment} user={user} nflGame ={nflGame} comments={comments} setComments={setComments} />) }
        </div>
    )
}

export default GameContainer
