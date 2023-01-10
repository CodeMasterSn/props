import React from "react"

const Profile = (props) => {
    return (
        <div>
            <h1> My name is {props.fullName}</h1>
            <h1> I am a {props.bio}</h1>
            <h1> And i work as a {props.profession}</h1>
            {props.children}
        </div>
    )
}

export default Profile;