

function AwayInfo({ awayML, awaySpr }) {
//add algorithm so that a + sign displays if the number is above 0
//add date
    return (
        <div>
            <h2>{awaySpr.name}</h2>
            <p>spread: {awaySpr.point} {awaySpr.price}</p>
            <p>money line: {awayML.price}</p>
        </div>
    )
}

export default AwayInfo
