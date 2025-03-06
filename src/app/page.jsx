"use client"
import { useState,useEffect  } from "react";
import IMGNasa from "./Head/page";
import Navb from "./Navebar/page";
import Overlay from "./overelay/page"
  import ToggleNav from "./ToggleNav/page"
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Run only on the client
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkScreenSize(); // Check size initially
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (<>
    <div >
      {isMobile?   <ToggleNav/> :<Navb/>}
    
 
<IMGNasa/>
<Overlay/>
    </div>
    </>
  );
}
