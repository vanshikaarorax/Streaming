import Logo from "../../designed/Logo";
import NavCom from "../../designed/NavCom";
import Search from "../../designed/Search";
import Subscribe from "../../designed/Subscribe";
import Translation from "../../designed/Translation";
import UserProfile from "../../designed/UserProfile";

const Navbar=()=>{
return(
   <div style={{ gap: '50px', alignItems: 'center' ,display:'flex',paddingLeft:'200px',backgroundColor:'black',height:'100px'}}>
    <Logo/>
    <NavCom/>
    <Search/>
    <Subscribe/>
    <Translation/>
    <UserProfile/>
   </div>
)
}
export default Navbar;