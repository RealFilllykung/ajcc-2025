import { Button } from "@/components/ui/button";
// import { FiGmail } from 'react-icons/fi';

const OutlookButton = () => {
    const handleOnClick = () => {
      const email = "tharathep.kln@alumni.mahidol.ac.th";
  
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
        {' '}
        Mahidol University Email
      </Button>
      
    );
  };
  
  export default OutlookButton;
  
