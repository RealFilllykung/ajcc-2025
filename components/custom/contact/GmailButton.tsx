import { Button } from "@/components/ui/button";
// import { FiGmail } from 'react-icons/fi';

const GmailButton = () => {
    const handleOnClick = () => {
      const email = "tharathepklinla-or@gmail.com";
  
      try {
        navigator.clipboard.writeText(email);
        alert("Copied to clipboard!");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <Button
        onClick={handleOnClick}
        className="h-14 text-lg bg-white text-[#C21E56] hover:bg-white/90"
      >
        {/* <FiGmail size={20} color="#C21E56" /> */}
        {' '}
        Personal Gmail
      </Button>
      
    );
  };
  
  export default GmailButton;
  
