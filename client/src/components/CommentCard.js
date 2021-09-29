import { useState, useEffect } from 'react'


function CommentCard({ comments, setComments, comment, nflGame, user, handleDeleteComment }) {
    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState(comment.comment)
    const id = comment.id

    function deleteClick(e) {
        e.preventDefault()
        fetch(`/comments/${id}`, {
            method: "DELETE"
        })
        handleDeleteComment(id)
    }

    function editComment() {
        setEdit(!edit)
    }

    function handleCommentEdit(e) {
        e.preventDefault()
        fetch(`/comments/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                id: id,
                comment: content,
                game_id: nflGame.id,
                user_id: user.id
            })
        })
        .then((r) => r.json())
        .then(newComment => {
            const edited = [...comments].map(comment => {
                if (id === newComment.id) {
                    return newComment
                } else {
                    return comment
                }
            })
            setComments(edited) 
            setEdit(!edit)
        })
    }

    return (
        <div>
            {nflGame.id === comment.game_id ? `${comment.user.username}: ${comment.comment}` : null}
            {nflGame.id === comment.game_id && user.id === comment.user_id ?
                <button onClick={deleteClick}>X</button> : null}
            {nflGame.id === comment.game_id && user.id === comment.user_id ?
                <button onClick={editComment}>Edit</button> : null}
            {edit ?
                <form onSubmit={handleCommentEdit}>
                    <input type="text" name="name" value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form> : null}
        </div>
    )
}

export default CommentCard
