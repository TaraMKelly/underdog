import { useState, useEffect } from 'react'

function NewCommentForm({ newGame, comments, setComments, user, homeSpr, awaySpr }) {
    const [text, setText] = useState("")
    // const [newGame, setNewGame] = useState([])

    async function onCommentSubmit(e) {
        e.preventDefault()
        // fetch('/games', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({
        //         home_team: homeSpr.name,
        //         away_team: awaySpr.name
        //     })
        // })
        // .then(res => res.json())
        // .then(data => setNewGame(data))

        const res = await fetch('/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: text,
                game_id: newGame.id,
                user_id: user.id
            })
        })
        const parsedBody = await res.json()
        setComments([...comments, parsedBody])
        setText("")
    }

    return (
        <form onSubmit={onCommentSubmit}>
            <input type="text" placeholder='Add a comment...' value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewCommentForm
