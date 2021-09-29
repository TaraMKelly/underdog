import { useState, useEffect } from 'react'
import NewCommentForm from './NewCommentForm'



function CommentCard({comment, nflGame, user, handleDeleteComment}) {
    const [edit, setEdit] = useState(false)

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

    return (
        <div>
            {nflGame.id === comment.game_id ? `${comment.user.username}: ${comment.comment}` : null}
            {nflGame.id === comment.game_id && user.id === comment.user_id ? 
                <button onClick={deleteClick}>X</button> : null}
            {nflGame.id === comment.game_id && user.id === comment.user_id ? 
                <button onClick={editComment}>Edit</button> : null}
            {/* {edit ? <NewCommentForm edit={edit} /> : null }  */}
        </div>
    )
}

export default CommentCard
