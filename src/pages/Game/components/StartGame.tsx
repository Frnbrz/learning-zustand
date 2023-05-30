import { useQuestionsStore } from '@/store/questions.store'
import { Button } from '@mui/material'

function StartGame() {
	const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)

	const handleClick = () => {
		fetchQuestions(0)
	}
	return (
		<Button variant='contained' onClick={handleClick}>
			Start
		</Button>
	)
}

export default StartGame
