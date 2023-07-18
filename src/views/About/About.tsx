/**
 * @summary About page of app
 * @author  Dallas Richmond
 */
import photo from '/aboutPic.jpg';

import {
  ContentContainer,
  StyledP,
  Image,
} from "./about.styles";
export default function About() {
  return (
    <ContentContainer>
      <Image src={photo} alt="Personal Photo" />
      <StyledP>
        I possess a diverse educational background in Astronomy, Physics, and Information Systems.
        However, my true passion lies in coding and its problem-solving potential, which led me 
        to make a significant shift from Astronomy and Physics to pursue a diploma in Information and Computer Systems at Camosun College.
      </StyledP>
      <StyledP>
        During my time at Camosun College, I honed my skills in React and back-end development through a 
        rewarding co-op experience at Gist Applications. This opportunity not only allowed me to grow as a 
        developer but also deepened my commitment to the world of programming.
      </StyledP>
      <StyledP>
        My proficiency spans across various programming languages, including C++, C#, Java, JavaScript, HTML,
        and CSS. Always eager to learn, I pride myself on being a quick learner, fostering a strong team spirit, 
        and constantly striving to enhance my skill set as I eagerly anticipate the future of technology.
      </StyledP>
    </ContentContainer>
  );
}