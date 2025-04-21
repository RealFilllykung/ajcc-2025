import { toast } from "@/hooks/use-toast";

const CopyClipboardToast = (email:string) => {

  return toast({
    title: "Copied to clipboard",
    description: "You have copied " + email + " to clipboard",
  })
};

export default CopyClipboardToast;
