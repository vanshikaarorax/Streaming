import Navbar from "../../components/custom/Navbar";
import DescriptionContainer from "../../containers/DescriptionContainer";
import HomeContainer from "../../containers/HomeContainer";
import PreviewContainer from "../../containers/PreviewContainer";

const HomePage=()=>{
return(
    <>
    <Navbar/>
    <HomeContainer/>
    <PreviewContainer/>
    <DescriptionContainer/>
    </>
)
}
export default HomePage;