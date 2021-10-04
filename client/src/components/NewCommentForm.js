import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'

function NewCommentForm({ nflGame, comments, setComments, user }) {
    const [text, setText] = useState("")

    async function onCommentSubmit(e) {
        e.preventDefault()
        setText("")
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
            <input type="text" name="name" placeholder='Add a comment...' value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div>
                <Button 
                    // style={{
                    //     fontSize=8
                    // }} 
                    variant="outlined" 
                    color="primary" 
                    size="small" 
                    type="submit">
                    Submit
                </Button>
            </div>
        </form>
    )
}

export default NewCommentForm
