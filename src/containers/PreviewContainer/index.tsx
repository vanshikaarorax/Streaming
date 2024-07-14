const PreviewContainer=()=>{
   return(
    <div style={{ display:'flex',gap: '100px', alignItems: 'center',backgroundColor:'black',height:'800px' }}>
    <div style={{fontSize:'40px',color:'white',display:'flex',flexDirection:'column' ,gap:'35px'}}>
    <div>Movie rentals on Prime Video</div>
    <span style={{fontSize:'20px',color:'white'}}>
    Early Access to new movies, before digital subscription
    </span>
    </div>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZU3CCnDBfmI5jWPs_93ggc3kPaiF4FJlRg&usqp=CAU" alt="" height="300px" style={{marginRight:'30px'}} />
   </div>
   )
}
export default PreviewContainer;