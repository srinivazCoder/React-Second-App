import { useEffect, useState } from "react"
import useFetchPeron from "./useFetchPerson";
// const url = "https://jsonplaceholder.typicode.com/users";
const url = "https://api.github.com/users/QuincyLarson";
const FetchData = () => {
//     const [user, setUser] = useState([]);
//     useEffect(() => {
//         const FetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 const users = await response.json();
//                 console.log(users)
//                 setUser(users)
//             } catch (error) {
//                 console.log(error)
//             }

//         }
//         FetchData()
//     }, []);
const {isLoading,isError,user} = useFetchPeron(url);
console.log(isLoading,isError,user)
if(isLoading){
    return <div>Loading...!</div>
}
if(isError){
    return <div>Error...!</div>
}
    return (
        <section className="FetchData">
            <h2 style={{ color: 'black', padding: 20, textAlign: "center" }}>Fetch Data Example</h2>
            <div className="card">
                {
                // user.map((user) => {
                    // const { id, login, avatar_url, html_url } = user;
                    // console.log(user)
                    // return (
                    <div key={user.id}>
                        <img src={user.avatar_url} alt={user.login}/>
                        <div>
                            <h5>{user.login}</h5>
                            <a href={user.html_url}>profile</a>
                            <p>Works at {user.company}</p>
                        </div>

                    </div>
                    // )
                // }
                // )
                }
            </div>
        </section>
    )
}
export default FetchData