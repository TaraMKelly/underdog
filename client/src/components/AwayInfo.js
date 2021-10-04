import Typography from "@mui/material/Typography"

function AwayInfo({ awayTeam, awayMl, awaySpr, awayPrice }) {
//add date
    return (
        <div>
            <Typography variant="h6">{awayTeam}</Typography>
            <Typography variant="body1"><b>point spread:</b> {awaySpr} {awayPrice}</Typography>
            <Typography variant="body1"><b>money line:</b> {awayMl}</Typography>
        </div>
    )
}

export default AwayInfo
