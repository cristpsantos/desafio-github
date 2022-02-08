import axios from 'axios';
import Button from 'components/Button';
import { useState } from 'react';
import ProfileLoader from './ProfileLoader';

import './styles.css';

type FormData = {
    
    prof: string;
};

type ProfileGit = { 
    avatar_url: string;
    url: string;
    name: string;
    location: string;
    followers: number;
}

const Profile = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        prof: '',
    });

    const[profileGit, setProfileGit] = useState<ProfileGit>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        setIsLoading(true);

        axios.get(`https://api.github.com/users/${formData.prof}`)
            .then((response) => {
                setProfileGit(response.data);
                setIsLoading(false);
            })
            .catch(() => {
                setProfileGit(undefined);
                setIsLoading(false);
            })
    }

    return (
        <div className="container">
            <div className="search-container">
                <h1 className="title">Encontre um perfil Github</h1>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input onChange={handleChange} name="prof" value={formData.prof} className="profile-input" type="text" placeholder="digite o perfil"/>
                    <Button description="Encontrar" />
                </form>
            </div>
            {isLoading ? <ProfileLoader /> :(profileGit && (
            <div>
                <div className="profile-container">
                    <div className="profile-img">
                        <img src={profileGit.avatar_url} alt="Imagem do perfil"/>
                    </div>
                    <div className="profile-info">
                        <h3>Informações</h3>
                        <div className="profile-item profile-link">
                            <span>Perfil:</span><p><a target="_blank" href={profileGit.url} rel="noreferrer">{profileGit.url}</a></p>
                        </div>
                        <div className="profile-item">
                            <span>Seguidores:</span><p>{profileGit.followers}</p>
                        </div>
                        <div className="profile-item">
                            <span>Localidade:</span><p>{profileGit.location}</p>
                        </div>
                        <div className="profile-item">
                            <span>Nome:</span><p>{profileGit.name}</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default Profile;