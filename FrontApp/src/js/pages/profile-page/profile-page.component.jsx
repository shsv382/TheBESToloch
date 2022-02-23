import React from "react";
import './profile-page.styles.scss';

import { useParams } from "react-router";
import useFetch from "../../effects/use-fetch.effect";

const ProfilePage = () => {
    const params = useParams();
    const profile = useFetch(`http://localhost:3000/profile/${params.id}`);
    return !profile ? 
    `Загрузка` :
    (
        <div>
            <h1>Профиль № {profile.id}: {profile.name}</h1>
        </div>
    )
}

export default ProfilePage;