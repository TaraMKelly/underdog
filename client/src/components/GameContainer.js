import GameCard from "./GameCard"

function GameContainer({nflGames}) {

    return (
        <div>
            <h1>NFL</h1>
            { nflGames.map(game => <GameCard key={game.id} game ={game} />) }
        </div>
    )
}

export default GameContainer
