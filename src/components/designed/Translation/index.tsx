import { useState } from "react";
import MyButton from "../MyButton";

const Translation =()=>{

    const [Hovered,isHovered]=useState(false);

    const handleMouseEnter =()=>{
        isHovered(true);
    }
    const handleMouseLeave=()=>{
        isHovered(false);
    }
return(
   <>
    <MyButton
                hoverContent={
                  <>
                    <button className="list-item" onClick={() => console.log('Option 1 clicked')}>
                     En
                    </button>
                    <button className="list-item" onClick={() => console.log('Option 2 clicked')}>
                     Es
                    </button>
                  </>
                }
                className="other-button"
              >
                En
              </MyButton>
   </>
)

}
export default Translation;