
function CommentCard({comment, userName, user}) {
    return (
        <div>
            {comment.user.username}: {comment.comment}
        </div>
    )
}

export default CommentCard
