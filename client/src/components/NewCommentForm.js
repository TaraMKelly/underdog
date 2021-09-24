import { useState, useEffect } from 'react'

function NewCommentForm({ nflGames, comments, setComments, user }) {
    const [text, setText] = useState("")

    function onSubmit(e) {
        e.preventDefault()
        fetch('/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                comment: text,
                game_id: nflGames.id,
                user_id: user.id
            })
        })
            .then(res => res.json())
            .then(data => {
                setComments([...comments, data])
                setText("")
            })
        fetch('/games', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                home_team: nflGames.home_team,
                away_team: nflGames.away_team
            })
        })

    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Add a comment...' value={text} onChange={(e) =>
                setText(e.target.value)} />
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewCommentForm
