/**
 * @summary Home page of app
 * @author  Dallas Richmond
 */
import { NavButton } from "../../components";

import { 
  HomeContainer,
  StyledHeading
} from "./home.styles";

export default function Home() {
  return (
    <HomeContainer>
      <StyledHeading>
        Dallas Richmond
      </StyledHeading>
      <NavButton 
        path="/dallas-richmond-portfolio/#/About"
        text="About Me"
        variant="default"
      />
      <NavButton 
        path="/dallas-richmond-portfolio/#/Projects"
        text="Projects"
        variant="secondary"
      />

    </HomeContainer>
  );
}
