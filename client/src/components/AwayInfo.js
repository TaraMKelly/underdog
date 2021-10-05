import Typography from "@mui/material/Typography"

function AwayInfo({ awayTeam, awayMl, awaySpr, awayPrice }) {
//add date
    return (
        <div>
            <Typography variant="subtitle1"><b>{awayTeam}</b></Typography>
            <Typography variant="body2"><b>point spread:</b> {awaySpr} {awayPrice}</Typography>
            <Typography variant="body2"><b>money line:</b> {awayMl}</Typography>
        </div>
    )
}

export default AwayInfo
