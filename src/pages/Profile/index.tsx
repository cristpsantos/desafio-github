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
        </div>
    );
}

export default Profile;