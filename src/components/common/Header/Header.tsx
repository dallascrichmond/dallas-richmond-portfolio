/**
 * @summary Header Component
 * @author  Dallas Richmond
 */
import {
  HeaderWrapper,
  Heading,
  Banner,
  StyledLink,
  BannerRight,
} from './header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <Banner>
        <StyledLink href="/dallas-richmond-portfolio/">
          <Heading>Portfolio</Heading>
        </StyledLink>
      </Banner>
      <BannerRight>
        <StyledLink href="/dallas-richmond-portfolio/">
          Home
        </StyledLink>
        <StyledLink href="/dallas-richmond-portfolio/#/About">
          About Me
        </StyledLink>
        <StyledLink href="/dallas-richmond-portfolio/#/Resume">
          Resume
        </StyledLink>
        <StyledLink href="/dallas-richmond-portfolio/#/Projects">
          Projects
        </StyledLink>
        <StyledLink href="/dallas-richmond-portfolio/#/Contact">
          Contact
        </StyledLink>
      </BannerRight>
    </HeaderWrapper>
  );
}
