import { Button } from "@/components/ui/button";
import { FiMail } from 'react-icons/fi';
import CopyClipboardToast from "./CopyClipboardToast";

const OutlookButton = () => {
    const handleOnClick = () => {
      const email = "tharathep.kln@alumni.mahidol.ac.th";
  
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
        Mahidol University Email
      </Button>
      
    );
  };
  
  export default OutlookButton;
  
