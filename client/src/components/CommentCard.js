
function CommentCard({comment, nflGame, user, comments, setComments, handleDeleteComment}) {

    const id = comment.id

    // function handleDeleteComment(id) {
    //     const deletedComment = comments.filter((c) => c.id !==id)
    //     setComments(deletedComment)
    // }

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
            <button onClick={deleteClick}>X</button>
            {/* {user.id === comment.user_id ? <button onClick={handleDeleteClick}>X</button> : null} */}
        </div>
    )
}

export default CommentCard
