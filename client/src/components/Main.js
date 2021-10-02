// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import GameContainer from './GameContainer'
// import CommentForum from './CommentForum'



function Main({ user }) {
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
            Welcome {user.username}
        </div>
    )
}

export default Main


