import { useLocation, Link } from "react-router-dom";

// assets
import "../assets/styles/pages/home.scss";


function Home() {
  const location = useLocation();

  return (
    <div data-testid="home-page">
      <h1>Home</h1>
      <p>{location.pathname}</p>
      <p>{JSON.stringify(location.search)}</p>
      <Link to="/auth/login">LogIn</Link>
    </div>
  );
}

export default Home;
