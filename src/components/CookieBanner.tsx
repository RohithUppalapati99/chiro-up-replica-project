import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-black text-white text-xs py-2">
      <div className="container flex items-center justify-between">
        <p className="text-white opacity-90">
          By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
        </p>
        <Button
          onClick={handleAccept}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-white ml-4 px-4 py-1 text-xs"
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;