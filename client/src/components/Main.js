import Typography from '@mui/material/Typography'
import dawg from "../assets/dawg.png"

function Main({ user, userPicks }) {
    return (
        <>
            <div
                style={{
                    position: 'absolute', left: '50%', top: '20%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <Typography sx={{ fontFamily: "Rock Salt" }} variant="h4">
                    Welcome {user.username}!
                </Typography>
            </div>
            <div
                style={{
                    position: 'absolute', left: '50%', top:'45%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <img src={dawg} alt="underdog" style={{ borderRadius: "50%" }} />
            </div>
            <div
                style={{position: 'absolute', top:'65%'}} 
                >
                Your Picks
            </div>
        </>
    )
}

export default Main


