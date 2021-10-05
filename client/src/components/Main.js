import Typography from '@mui/material/Typography'
import dawg from "../assets/Dawg.JPG"

function Main({ user }) {
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '40%',
                transform: 'translate(-50%, -50%)'
            }}>
            <img src={dawg} alt="underdog" />
            <Typography variant="h4">
                Welcome {user.username}!
            </Typography>
        </div>
    )
}

export default Main


