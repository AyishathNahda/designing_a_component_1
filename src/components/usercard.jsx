// write the component code here
import React from "react";


const userCard=()=>{
    const userImage="https://i.pinimg.com/474x/50/23/d6/5023d6380549cae455578375db224f34.jpg";
    const userName="Leonardo Di Caprio";
    const userMail="leaonardo@gmail.com";
    const userNumber="9895665862";
    const userAddress="Oriole Way, Los Angeles, California";
    return(
        <div className="user-card">
            <img className="user-pic" src={userImage} alt="Profile" style={{width: "100px", height: "100px", borderRadius: "50%"}}></img> 
            <div className="user-info">
                <h2 className="user-name">Name: {userName}</h2>
                <p className="user-email">Email: {userMail}</p>
                <p className="user-phone">Phone: {userNumber}</p>
                <p className="user-address">Address: {userAddress}</p>
            </div>

        </div>
    );
};

export default userCard;
