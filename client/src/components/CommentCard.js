
function CommentCard({comment, user}) {
    return (
        <div>
            {user.username}: {comment.comment}
        </div>
    )
}

export default CommentCard
