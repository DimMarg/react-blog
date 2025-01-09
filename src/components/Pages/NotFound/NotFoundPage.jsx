import { Link } from "react-router-dom";
import Container from "../../Container/Container";

const NotFoundPage = () => {
    return (
        <div className="error-page">
            <Container>
                <h1 className="title">404</h1>
                <p className="subtitle">Oops! Page not found.</p>
                <Link to={'/'}>Go to home page.</Link>
            </Container>
        </div>
    )
}

export default NotFoundPage;