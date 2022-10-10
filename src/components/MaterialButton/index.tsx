import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { buttonVariants } from "../types";

const MaterialButton = (variant = buttonVariants.contained) => {
  return (<Button variant={variant} />);
};

export default MaterialButton;