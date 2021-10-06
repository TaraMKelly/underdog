import Typography from "@mui/material/Typography"

function HomeInfo({ homeTeam, homeMl, homeSpr, homePrice }) {
//add date
    return (
        <div>
            <Typography variant="subtitle1"><b>{homeTeam}</b></Typography>
            <Typography variant="body2"><b>point spread:</b> 
                {homeSpr > 0 ? `+${homeSpr}` : homeSpr}
                {homePrice > 0 ? `+${homePrice}` : homePrice}
            </Typography>
            <Typography variant="body2"><b>money line:</b> 
                {homeMl > 0 ? `+${homeMl}` : homeMl}
            </Typography>
        </div>
    )
}

export default HomeInfo
