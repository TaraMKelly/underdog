
function CommentCard({comment, nflGame, user, handleDeleteComment}) {

    const id = comment.id

    function deleteClick(e) {
        e.preventDefault()
        fetch(`/comments/${id}`, {
            method: "DELETE"
        })
        handleDeleteComment(id)
    }

    return (
        <div>
            {nflGame.id === comment.game_id ? `${comment.user.username}: ${comment.comment}` : null}
            {nflGame.id === comment.game_id && user.id === comment.user_id ? 
                <button onClick={deleteClick}>X</button> : null}
        </div>
    )
}

export default CommentCard
