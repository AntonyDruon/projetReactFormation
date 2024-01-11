import { Link } from "react-router-dom";
import { NavContainer, Ul, Li } from "./styled";
const Nav = () => {
  return (
    <NavContainer>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/admin">Admin</Link>
        </Li>
        <Li>
          <Link to="/contact">Contact</Link>
        </Li>
      </Ul>
    </NavContainer>
  );
};

export default Nav;
