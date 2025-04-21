import { Button } from "@/components/ui/button";
import { FiMail } from 'react-icons/fi';
import CopyClipboardToast from "./CopyClipboardToast";
import { toast } from "@/hooks/use-toast";

const GmailButton = () => {
    const handleOnClick = () => {
      const email = "tharathepklinla-or@gmail.com";
  
      try {
        navigator.clipboard.writeText(email);
        CopyClipboardToast(email)
      } catch (error) {
        console.error(error);
      }      
    };
  
    return (
      <Button
        onClick={handleOnClick}
        className="h-14 text-lg bg-white text-[#C21E56] hover:bg-white/90"
      >
        <FiMail size={20} color="#C21E56" />
        {' '}
        Personal Gmail
      </Button>
      
    );
  };
  
  export default GmailButton;
  
