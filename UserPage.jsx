
import React, {useState , useEffect} from "react";

const userDetails = "https://jsonplaceholder.typicode.com/posts";

const UserPage = () => {
    const [User, setUser] = useState([]);
    const UserHandler = async () => {
        const response = await fetch(userDetails);
        const newData = await response.json();
        setUser(newData);
    };
    useEffect(() =>  {
    console.log(UserHandler());
    }, []);
    console.log(User)

  return <div>
        {User.map((item)=>{
            return(
                <div className="userSection">

                <h2 style={{color:"blue"}}>{item.title} </h2>   
                <h3 style={{color:"green"}}>{item.body}</h3>
                    </div>
            )
        })}
</div>;
  
};

export default UserPage;