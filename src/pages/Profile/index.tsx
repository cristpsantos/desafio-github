import Button from 'components/Button';

import './styles.css';

const Profile = () => {
    return (
        <div className="container">
            <div className="search-container">
                <h1 className="title">Encontre um perfil Github</h1>
                <form className="form-container">
                    <input className="profile-input" type="text" placeholder="digite o perfil"/>
                    <Button description="Encontrar" />
                </form>
            </div>
            <div>
                <div className="profile-container">
                    <div className="profile-img">
                        <img src="https://avatars.githubusercontent.com/u/13897257?v=4" alt="Imagem do perfil"/>
                    </div>
                    <div className="profile-info">
                        <h3>Informações</h3>
                        <div className="profile-item profile-link">
                            <span>Perfil:</span><p><a href="https://api.github.com/users/acenelio">https://api.github.com/users/acenelio</a></p>
                        </div>
                        <div className="profile-item">
                            <span>Seguidores:</span><p>4379</p>
                        </div>
                        <div className="profile-item">
                            <span>Localidade:</span><p>Uberlândia</p>
                        </div>
                        <div className="profile-item">
                            <span>Nome:</span><p>Nélio Alves</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;