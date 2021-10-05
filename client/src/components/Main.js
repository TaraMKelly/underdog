import Typography from '@mui/material/Typography'
import dawg from "../assets/dawg.png"

function Main({ user }) {
    return (
        <>
            <div
                style={{
                    position: 'absolute', left: '50%', top: '30%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <Typography sx={{ fontFamily: "Rock Salt" }} variant="h4">
                    Welcome {user.username}!
                </Typography>
            </div>
            <div
                style={{
                    position: 'absolute', left: '50%', top:"55%",
                    transform: 'translate(-50%, -50%)'
                }}>
                <img src={dawg} alt="underdog" style={{ borderRadius: "50%" }} />
            </div>
        </>
    )
}

export default Main


