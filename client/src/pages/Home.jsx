import mobile_bg from "./../assets/bg-main-mobile.png"
import desktop_bg from "./../assets/bg-main-desktop.png"
import back_card from "./../assets/bg-card-back.png"
import front_card from "./../assets/bg-card-front.png"
import complete from "./../assets/icon-complete.svg"
import card_logo from "./../assets/card-logo.svg"
import "./../styles/home.css"
import "./../styles/form.css"
import { useState } from "react"

function Home() {

  let [mobile, setMobile] = useState(true);
  let [desktop, setDesktop] = useState(false);

  function mobileView(){

  }
  
  function desktopView(){
    
  }


  return (
    <section className="home-container">
      <section className="cards-container">
        <div className="desktop-view"> 
          <img className="desktop-bg" src={desktop_bg} alt="desktop-bg" />
        </div>
        <div className="mobile-view">
          <img className="mobile-bg" src={mobile_bg} alt="mobile-bg" />          
        </div>
        <div className="cards-container">
          <div className="back-card">
            <p className="card-number back-card-number"> 000 </p>
          </div>
          <div className="front-card">
            <img className="card-logo" src={card_logo} alt="card-logo" />
            <p className="card-number"> 0000 0000 0000 0000 </p>
            <p className="card-name"> JANE APPLESEED </p>
            <p className="card-date" > 00/00 </p>
          </div>
        </div>
      </section>
      <section className="form-container">
        <section className="thank-you-container" style={{display:"none"}}>
          <img src={complete} alt="complete" />
          <h1> THANK YOU </h1>
          <span> We've added your card details </span>
        </section>
        <form>
          
          <label> CARDHOLDER NAME </label>
          <input type="text" placeholder="e.g. Jane Appleseed"/>
          
          <label> CARD NUMBER </label>
          <input type="number" placeholder="e.g. 1234 5678 9123 0000"/>

          <div className="inline-inputs-container">
            <div className="date-inputs-container">
              <label> EXP. DATE (MM/YY) </label>
              <input type="number" placeholder="MM"/>
              <input type="number" placeholder="YY"/>
            </div>
            
            <div className="cvc-inputs-container">
              <label> CVC </label>
              <input type="number" placeholder="e.g. 123"/>
            </div>
          </div>

          <button type="submit"> Confirm </button>

        </form>
      </section>
    </section>
  );
}

export default Home;
