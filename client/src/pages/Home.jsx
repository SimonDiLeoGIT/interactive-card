import mobile_bg from "./../assets/bg-main-mobile.png"
import desktop_bg from "./../assets/bg-main-desktop.png"
import back_card from "./../assets/bg-card-back.png"
import front_card from "./../assets/bg-card-front.png"
import complete from "./../assets/icon-complete.svg"

function Home() {
  return (
    <section className="home-container">
      <section className="cards-container">
        <div className="mobile-view">
          <img className="mobile-bg" src={mobile_bg} alt="mobile-bg" />          
          <img className="back-card" src={back_card} alt="back-card" />
          <img className="front-card" src={front_card} alt="front-card" />
        </div>
        <div className="desktop-view" style={{display: "none"}}> 
          <img className="desktop-bg" src={desktop_bg} alt="desktop-bg" />          
          <img className="front-card" src={front_card} alt="front-card" />
          <img className="back-card" src={back_card} alt="back-card" />
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

          <label> EXP. DATE (MM/YY) </label>
          <input type="number" placeholder="MM"/>
          <input type="number" placeholder="YY"/>

          <label> CVC </label>
          <input type="number" placeholder="e.g. 123"/>

          <button type="submit"> Confirm </button>

        </form>
      </section>
    </section>
  );
}

export default Home;
