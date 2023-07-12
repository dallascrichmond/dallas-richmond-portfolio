/**
 * @summary Header Component
 * @author  Dallas Richmond
 */

import {
  HeaderWrapper,
  Heading,
  Banner,
  StyledLink,
  BannerLeft,
  BannerRight,
} from './header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <BannerLeft>
      </BannerLeft>
      <Banner>
        <StyledLink href="/">
          <Heading>Portfolio - Dallas Richmond</Heading>
        </StyledLink>
      </Banner>
      <BannerRight>
      </BannerRight>
    </HeaderWrapper>
  );
}
