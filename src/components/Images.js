import "../css/Images.css"


const Images = () => {
    return ( 
        <div className="classWrapper"> 
        <p>Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause.
           Stay tuned for updates on our reopening date and new events, coming soon!</p>
           

           <div className="imagesWrapper">   
        <div className="imageOne">
            <div className ="oneText">Jazz n'<br></br>
            Jive</div>

        <div className="txtOne">    
        <h2>Every Monday</h2>
        <h2>9-11pm</h2>
        <p>Jazz up your Monday nights with intimate and lively performances by a rotating selection of renowned bands.</p>
        </div>
        </div>




        <div className="imageTwo"> 
        <div className ="twoText">Burlesque<br></br> After Dark</div>
        <div className="txtOne">    
        <h2>Every Tuesday & Sunday</h2>
        <h2>9:30pm</h2>
        <p>Enter the world of burlesque and lose yourself in enticing witty performances, exceptional cocktails, and lively music.</p>
        </div>
        </div>




        <div className="imageThree">
        <div className ="threeText">DJs &<br></br> Dance Tracks</div>
        <div className="txtOne">    
        <h2>Every Thursday, Friday & Saturday Night</h2>
        <h2>From 9pm & 10pm</h2>
        <p>If you're looking for a packed crowd, come when the party is bigger, the pace is faster, and the morals are looser.</p>
        </div>
        </div>
        </div>
        </div>
     );
}
 
export default Images;