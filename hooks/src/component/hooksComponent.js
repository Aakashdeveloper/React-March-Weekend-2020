import React,{useState,useEffect} from 'react';

const url = ""
function HooksComponent(){

    const [title] = useState('Developer Funnel');
    const [count,setCount] = useState(0);
    const [movies,setMovies] = useState('');

    useEffect(() => {
        /*fetch(url)
        .then((res) =>  res.json)
        .then((data) => setMovies(data))
*/
        async function getMovies(){
            const res = await fetch(url);
            res.json()
            .then((data) => setMovies(data))
        }

        getMovies()
    });

    return(
        <div>
            <h1>{title}</h1>
            <p>{count}</p>
            <div className="btn btn-success"
            onClick={() => {setCount(count+1)}}>
                Counter
            </div>
        </div>
    )
}

export default HooksComponent;