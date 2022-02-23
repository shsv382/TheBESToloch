import React from "react";
import './profile.styles.scss';

const Profile = ({ profile }) => {
    const { id, name } = profile;
    return (
        <div>
            <h3>{id}. {name}</h3>
        </div>
    )
}

export default Profile;