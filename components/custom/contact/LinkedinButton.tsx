// import {FiLinkedin} from 'react-icons/fi';
import { Button } from "@/components/ui/button"

const LinkedinButton = () => {
  const handleOnClick = () => {
    window.open('https://www.linkedin.com/in/tharathep-k/', '_blank');
  };

  return (
    <Button
      onClick={handleOnClick}
      className="h-14 text-lg bg-white text-[#C21E56] hover:bg-white/90"
    >
      {/* <FiLinkedin size={20} color="#C21E56" /> */}
      {' '}
      LinkedIn
    </Button>
    
  );
};

export default LinkedinButton;
