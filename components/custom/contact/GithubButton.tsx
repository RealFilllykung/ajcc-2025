import { Button } from "@/components/ui/button"
// import { FiGithub } from 'react-icons/fi';

const GithubButton = () => {
  const handleOnClick = () => {
    window.open('https://github.com/RealFilllykung', '_blank');
  };

  return (
    <Button
      onClick={handleOnClick}
      className="h-14 text-lg bg-white text-[#C21E56] hover:bg-white/90"
    >
      {/* <FiGithub size={20} color="#C21E56" /> */}
      {' '}
      Github
    </Button>
    
  );
};

export default GithubButton;
