import Typography from "@mui/material/Typography"

function HomeInfo({ homeTeam, homeMl, homeSpr, homePrice }) {
//add date
    return (
        <div>
            <Typography variant="h6">{homeTeam}</Typography>
            <Typography variant="body1"><b>point spread:</b> {homeSpr} {homePrice} </Typography>
            <Typography variant="body1"><b>money line:</b> {homeMl}</Typography>
        </div>
    )
}

export default HomeInfo
