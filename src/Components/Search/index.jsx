import { useState } from "react"
import { useGlobalContext } from "../../context"


const Search = () => {

const [Text, setText] = useState('');
const {setSearchTerm, fetchRandomMeal} = useGlobalContext();

const handleChange = (e) => {
    setText(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(Text){
        setSearchTerm(Text);
        // setText('')
    }
}

const handleRandomMeal = () => {
    setSearchTerm('');
    setText('');
    fetchRandomMeal();
}

    return(
       <header className="search-container">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search food here!!" className="form-input" value={Text} onChange={handleChange}/>
            <button type="submit" className="btn">Search</button>
            <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>Surprise Me!</button>
        </form>
       </header>
    )
}

export default Search