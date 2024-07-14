import BoxesLayout from "../../components/custom/ChannelComb";

const DescriptionContainer=()=>{
    return(
        <div style={{ display:'flex',gap: '50px', alignItems: 'center',backgroundColor:'white',height:'800px' }}>
        <div style={{fontSize:'40px',color:'Black',display:'flex',flexDirection:'column' ,gap:'35px'}}>
        <div>Your favorite channels all in one place</div>
        <span style={{fontSize:'20px',color:'white'}}>
        With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice
        </span>
        </div>
       <div>
       <BoxesLayout/>
       </div>
       
       </div>
       )
}
export default DescriptionContainer;