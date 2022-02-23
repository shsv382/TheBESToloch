import React from "react";
import './profile.styles.scss';
import { useNavigate } from 'react-router';

const Profile = ({ profile }) => {
    const { id, name } = profile;
    const navigate = useNavigate();
    return (
        <div onDoubleClick={() => navigate(`${id}`)}>
            <h3>{id}. {name}</h3>
        </div>
    )
}

export default Profile;