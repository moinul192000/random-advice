import { useEffect, useState } from "react"

export const AdviceComponent = () =>{
    const [advice,setAdvice] = useState({id:null,advice:""});
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data=>setAdvice(data.slip));
        
        setLoading(false);
    },[loading]);

    return(
        <>
        {loading?
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        :
            <div className="card text-center shadow-lg">
                <div className="card-header">
                    Advice # {advice.id}
                </div>
                <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{advice.advice}</p>
                </blockquote>
                </div>
            </div>
        }
        </>
    )
}