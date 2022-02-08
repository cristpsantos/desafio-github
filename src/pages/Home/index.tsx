import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './styles.css';

const Home = () => {
    return(
        <div className="home-container">
            <h1 className="title-home">
                Desafio Github API
            </h1>
            <p>Bootcamp Spring React - DevSuperior</p>
            <Link to="/profile">
                <Button description="Começar"/>
            </Link>
        </div>
    );
}

export default Home;