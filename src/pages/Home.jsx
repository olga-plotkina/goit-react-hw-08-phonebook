import { WelcomeTitle, Link } from './Home.styled';

const HomePage = () => {
  return (
    <>
      <WelcomeTitle>Welcome to PhoneBook!</WelcomeTitle>
      <Link to="/login">Get Started</Link>
    </>
  );
};

export default HomePage;
