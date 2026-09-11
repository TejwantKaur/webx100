import { useMemo, useState } from "react";

let globalId = 1;

const words = ["Rolls", "Royale", "Thar", "Bmw", "Mercedes", "Audi", "Roxx", "Porche", "Wagen", "Range", "Rover"]
const lines = 500;
const allWords = [];

for(let i=0; i<lines; i++){
    let sent = ""
    let sentLen = Math.floor(15 * Math.random())
    for(let j=0; j<sentLen; j++){
        sent += (words[Math.floor(words.length * Math.random())]) // range < 8
        sent += " "
    }
    allWords.push(sent);
}

function Memo2Filter() {
    const [sentences, setSentences] = useState(allWords) // []
    const [filter, setFilter] = useState("") // stores current val of input box

    const filteredSentences = useMemo(() => {
        return sentences.filter(everySent => 
            everySent.includes(filter)
        )
    }, [sentences, filter])
    
    return ( 
        <div>
            <input type="text" onChange={(e)=> setFilter(e.target.value)}/>
            {filteredSentences.map(sent =>
                <div key={globalId++}>{sent}</div>
            )}
        </div>
     );
}

export default Memo2Filter;