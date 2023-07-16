import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { FormattedMessage } from "react-intl";

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Link to={"/story"}>
        <FormattedMessage id="HOME.PLAY" defaultMessage="Play the game!" />
      </Link>
    </>
  );
};
