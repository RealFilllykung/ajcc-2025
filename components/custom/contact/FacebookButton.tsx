import { Button } from "@/components/ui/button"
import { FiFacebook } from 'react-icons/fi';

const FacebookButton = () => {
  const handleOnClick = () => {
    window.open('https://www.facebook.com/filllykunggm', '_blank');
  };

  return (
    <Button
      onClick={handleOnClick}
      className="h-14 text-lg bg-white text-[#C21E56] hover:bg-white/90"
    >
      <FiFacebook size={20} color="#C21E56" />
      {' '}
      Facebook
    </Button>
    
  );
};

export default FacebookButton;
