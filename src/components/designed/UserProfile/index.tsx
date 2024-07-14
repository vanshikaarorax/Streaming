import { BiLogIn } from "react-icons/bi";
import MyButton from "../MyButton";
const UserProfile=()=>{
return(
    <>
    <MyButton
                hoverContent={
                  <>
                    <button className="list-item" onClick={() => console.log('Option 1 clicked')}>
                     Sign in
                    </button>
                    <button className="list-item" onClick={() => console.log('Option 2 clicked')}>
                     Help
                    </button>
                    <button className="list-item" onClick={() => console.log('Option 1 clicked')}>
                     Watch Anywhere
                    </button>
                  </>
                }
                className="other-button"
              >
               <BiLogIn />
              </MyButton>
    </>
)
}
export default UserProfile;