/**
 * @summary NavButtin component
 * @author  Dallas Richmond
 */
import { 
  StyledLink,
} from "./navButton.styles";

type ButtonVariants = 'default' | 'secondary';
type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
  path: string;
  text: string;
  variant: ButtonVariants;
  size?: ButtonSizes;
}

export default function NavButton({
  path,
  text,
  variant,
  size,
}: ButtonProps) {
  return (
    <StyledLink
      href={path}
      variant={variant}
      size={size} 
    >
      {text}
    </StyledLink>
  );
}