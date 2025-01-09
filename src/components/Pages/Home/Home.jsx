import { Link } from "react-router-dom";
import Container from "../../Container/Container";

const Home = () => {
    return (
        <div className="home-view">
            <div className="wrapper">
                <Container>
                    <svg className="sleed-logo" data-name="Layer 1" viewBox="0 0 850 350">
                        <path d="M531.23,135.41a54,54,0,0,0-24,5.69l73,73A54,54,0,0,0,585.82,190a54.58,54.58,0,0,0-54.59-54.6m-51,80.72,0,0v0s13.39,13.4,13.71,13.68A54.34,54.34,0,0,0,555.33,239L460,143.64l-3.43-3.42a89.79,89.79,0,1,1,12.54,114.46l0,0L455.36,241Z" fill="#ffffff"></path>
                        <path d="M725.27,243.67a54.6,54.6,0,1,1,0-109.19h54.6v54.6a54.6,54.6,0,0,1-54.6,54.59m54.6-215V99.35h-54.6A89.73,89.73,0,1,0,815,189.08V28.64Z" fill="#ffffff"></path>
                        <rect x="633.09" y="307.59" width="174.11" height="13.78" fill="#ffffff"></rect>
                        <rect x="225.75" y="28.63" width="35.17" height="251.2"></rect>
                        <path d="M161.26,172.43H88.72a18.56,18.56,0,0,1,0-37.12H197.15V100.17H88.72a53.71,53.71,0,1,0,0,107.41h72.54a18.55,18.55,0,1,1,0,37.1H52.85v35.14H161.26a53.7,53.7,0,0,0,0-107.39"></path>
                        <path d="M364.39,135.41a54.09,54.09,0,0,1,24.05,5.69l-73,73a54.49,54.49,0,0,1,48.93-78.69m51,80.72,0,0v0s-13.38,13.4-13.7,13.68A54.37,54.37,0,0,1,340.29,239l95.31-95.32,3.44-3.41a89.76,89.76,0,1,0-12.49,114.46v0L440.27,241Z"></path>
                        <rect x="451.19" y="307.59" width="174.11" height="13.78"></rect>
                    </svg>
                    <p className="description">Welcome to the official SLEED blog. You can find all our posts by clicking <Link to={'/blog'}>here</Link></p>
                </Container>
            </div>
            <div className="home-bg"></div>
        </div>
    );
}

export default Home;