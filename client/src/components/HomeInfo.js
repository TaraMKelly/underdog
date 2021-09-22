

function HomeInfo({ homeML, homeSpr }) {
//add algorithm so that a + sign displays if the number is above 0
//add date
    return (
        <div>
            <h2>{homeSpr.name}</h2>
            <p>point spread: {homeSpr.point}    {homeSpr.price}</p>
            <p>money line: {homeML.price}</p>
        </div>
    )
}

export default HomeInfo
