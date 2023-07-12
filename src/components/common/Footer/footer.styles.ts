/**
 * @summary Styles for Footer component
 * @author  Dallas Richmond
 */
import styled from '@emotion/styled';
import mq from '../../../constants/mq';

export const FooterWrapper = styled.footer`
  font-family: montserrat;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 100%;
  background-color: #4d4d4d;
  color: #FFF;
  padding: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100dvw;
  max-width: ${mq.tablet};
  text-align: center;
  height: 46px;
  @media (min-width: ${mq.desktop}){
    display: none;
  }
`;
