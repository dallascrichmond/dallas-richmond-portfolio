/**
 * @summary Home page of app
 * @author  Dallas Richmond
 */
import { NavButton } from "../../components";

import { 
  HomeContainer,
  HomeWrapper,
  StyledHeading,
  ButtonContainer,
} from "./home.styles";

export default function Home() {
  return (
    <HomeContainer>
      <HomeWrapper>
        <StyledHeading>
          Dallas Richmond
        </StyledHeading>
        <ButtonContainer>
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
        </ButtonContainer>
      </HomeWrapper>
    </HomeContainer>
  );
}
