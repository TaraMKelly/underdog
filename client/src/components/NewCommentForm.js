import { useState, useEffect } from 'react'

function NewCommentForm({ nflGame, comments, setComments, user }) {
    const [text, setText] = useState("")
    // const [newGame, setNewGame] = useState([])

    async function onCommentSubmit(e) {
        e.preventDefault()
        const res = await fetch('/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: text,
                game_id: nflGame.id,
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
