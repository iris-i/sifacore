interface ButtonProps {
  size: 'large' | 'small';
  variant: 'dark' | 'light';
  text: string;
}

const Button = ({ size, variant, text }: ButtonProps) => {
  return (<button className={`button-${size} button-${variant} button`}>{text}</button>)
}

export default Button;
