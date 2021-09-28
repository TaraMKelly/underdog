
function CommentCard({comment, nflGame, user, comments, setComments}) {

    function handleDeleteClick(id) {
        fetch(`/comments/${id}`, {
            method : "DELETE"
        }).then((r) => {
            if (r.ok && comments) {
                setComments(comments.filter((c) => c.id !== id))
            }
        })
    }

    return (
        <div>
            {nflGame.id === comment.game_id ? `${comment.user.username}: ${comment.comment}` : null}
            {/* {user.id === comment.user_id ? <button onClick={handleDeleteClick}>X</button> : null} */}
        </div>
    )
}

export default CommentCard
