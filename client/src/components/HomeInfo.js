

function HomeInfo({ homeML, homeSpr }) {
//add date
    return (
        <div>
            <h2>{homeSpr.name}</h2>
            <p>point spread: {homeSpr.point > 0 ? `+${homeSpr.point}` : homeSpr.point} 
            {homeSpr.price > 0 ? `+${homeSpr.price}` : homeSpr.price}</p>
            <p>money line: {homeML.price > 0 ? `+${homeML.price}` : homeML.price}</p>
        </div>
    )
}

export default HomeInfo
