import './styles.css';

type Props = {
    description: string;
}

const Button = ( {description} : Props) => {
    return(
        <button className="btn btn-primary btn-custom">{description}</button>
    );
}

export default Button;