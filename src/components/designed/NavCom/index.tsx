import MyButton from "../MyButton";



const NavCom=()=>{

   
        return (
            <div className="button-container" style={{ gap: '50px', alignItems: 'center' ,display:'flex'}}>
              <MyButton
                hoverContent={
                  <>
                    <button className="list-item" onClick={() => console.log('All clicked')}>
                      All
                    </button>
                    <button className="list-item" onClick={() => console.log('Movies clicked')}>
                      Movies
                    </button>
                    <button className="list-item" onClick={() => console.log('TV shows clicked')}>
                      TV shows
                    </button>
                  </>
                }
                className="home-button"
              >
                Home
              </MyButton>
        
              <MyButton
                hoverContent={
                  <>
                    <button className="list-item" onClick={() => console.log('Option 1 clicked')}>
                      All
                    </button>
                    <button className="list-item" onClick={() => console.log('Option 2 clicked')}>
                      Rent
                    </button>
                    <button className="list-item" onClick={() => console.log('Option 3 clicked')}>
                      Channel
                    </button>
                  </>
                }
                className="other-button"
              >
                <MyButton
                hoverContent={
                  <>
                    <button className="list-item" onClick={() => console.log('Option 1 clicked')}>
                      All
                    </button>
                    <button className="list-item" onClick={() => console.log('Option 2 clicked')}>
                      Rent
                    </button>
                    <button className="list-item" onClick={() => console.log('Option 3 clicked')}>
                      Channel
                    </button>
                  </>
                }
                className="other-button"
              >
                Store
              </MyButton>
              </MyButton>
             <button>
                Live TV
             </button>

              <MyButton
                hoverContent={
                  <>
                    <button className="list-item" onClick={() => console.log('Option 1 clicked')}>
                      Genres
                    </button>
                    <button className="list-item" onClick={() => console.log('Option 2 clicked')}>
                      Featured Collection
                    </button>
                  </>
                }
                className="other-button"
              >
                Categories
              </MyButton>
            </div>
          );
    
        }
export default NavCom;