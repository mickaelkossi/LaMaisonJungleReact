import { useState } from 'react'
import '../styles/QuestionForm.css'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez vote question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>

        </div>
        
    )
}

export default QuestionForm