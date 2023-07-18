/**
 * @summary Resume page of app
 * @author  Dallas Richmond
 */
import resume from '/Resume.pdf';

import { 
  ResumeContainer
} from "./resume.styles";

export default function Resume() {
  return (
    <ResumeContainer>
      <iframe src={resume} width="100%" height="100%"></iframe>
    </ResumeContainer>
  );
}