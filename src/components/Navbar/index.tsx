import "./styles.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-custom">
      <div className="brand-container">
        <Link to="/" className="navbar-brand" href="link">Github API</Link>
      </div>
    </nav>
  );
};

export default Navbar;
