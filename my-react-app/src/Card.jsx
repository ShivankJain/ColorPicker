// This File is not for Color Picker

import zoroImage from './assets/zoroImg.png'


function Card(){
    return (
         <div className="card">
             <img className="card-image" src={zoroImage} alt="profile picture"></img>
             <h2 className="card-title">Shivank Jain</h2>
             <p className="card-text">I am a Software Engineer at TCS. I do web deveploment. And I Love Sketching</p>   
         </ div>
    );
}

export default Card