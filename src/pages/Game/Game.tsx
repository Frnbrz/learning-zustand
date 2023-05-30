import { StartGame } from '@/pages/Game'
import { useQuestionsStore } from '@/store/questions.store'

function Game() {
	const questions = useQuestionsStore(state => state.questions)
	return (
		<>
			{questions.length === 0 && <StartGame />}
			{questions.length > 0 && <h1>juego</h1>}
		</>
	)
}

export default Game
