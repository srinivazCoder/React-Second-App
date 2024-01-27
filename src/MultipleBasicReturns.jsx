import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleBasicReturns=()=>{
    
    
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setIsError] = useState(false)
    const [user,setUser] = useState(null);

    useEffect(()=>{
        const FetchUser= async()=>{
            try{
                const response = await fetch(url)
                if(!response.ok){
                    setIsError(true)
                    setIsLoading(false)
                    return
                }
                const user = await response.json()
                console.log(response)
                setUser(user)
            }
            catch(error){
                setIsError(true)
                console.log(error)
            }
            
            setIsLoading(false)
          
        }
        FetchUser()
    },[])

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        console.log(isError)
        return <h2>There was an error</h2>
    }

    const {name,company,bio,avatar_url} =user;
    return (
        <div >
            <img style={{width:'150px',borderRadius:'25px'}} src={avatar_url}  alt={name}/>
            <h2>{name}</h2>
            <h4>works at {user.company}</h4>
            <p>{bio}</p>
        </div>
    )
}
export default MultipleBasicReturns;