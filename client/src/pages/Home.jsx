import mobile_bg from "./../assets/bg-main-mobile.png"
import desktop_bg from "./../assets/bg-main-desktop.png"
import complete from "./../assets/icon-complete.svg"
import card_logo from "./../assets/card-logo.svg"
import "./../styles/home.css"
import "./../styles/form.css"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from "../schemas/formSchema"

function Home() {

  
  /* This is the visual data on the card */
  let [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  let [cardName, setCardName] = useState("JANE APPLESEED");
  let [cardMonth, setCardMonth] = useState("00");
  let [cardYear, setCardYear] = useState("00");
  let [cardCVC, setCardCVC] = useState("000");
  
  /* This is the data on the inputs */
  let [cardInputNumber, setCardInputNumber] = useState("");
  let [cardInputName, setCardInputName] = useState("");
  let [cardInputMonth, setCardInputMonth] = useState("");
  let [cardInputYear, setCardInputYear] = useState("");
  let [cardInputCVC, setCardInputCVC] = useState("");



  function cardMonthHandler(value) {
    value.length > 2  && (value = value.slice(0, 2));
    setCardMonth(value);
    setCardInputMonth(value);
  }

  function cardYearHandler(value) {
    value.length > 2  && (value = value.slice(0, 2));
    setCardYear(value);
    setCardInputYear(value);
  }

  function cardNameHandler(value) {
    value = value.toUpperCase();
    value.length > 30 && (value = value.slice(0, 30));
    value.length > 0 ? setCardName(value) : setCardName("JANE APPLESEED");
    setCardInputName(value.toUpperCase());
  }

  function cardNumberHandler(value) {
    let newNumber = "";
    if(value.length === 0){
      setCardNumber("0000 0000 0000 0000");
      setCardInputNumber("");
    } else if(value.length <= 16){
      for(let i = 0; i < value.length; i++) {
        newNumber += value[i];
        (((i+1) % 4) === 0) && (newNumber += " ");
      }
      setCardNumber(newNumber);
      setCardInputNumber(value);
    } else {
      setCardInputNumber(value.slice(0, 16));
    }
  }

  function cvcHandler(value){
    value.length > 3  && (value = value.slice(0, 3));
    value.length > 0 ? setCardCVC(value) : setCardCVC("000");
    setCardInputCVC(value);
  }


  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(formSchema),
  });

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
            <p className="card-number back-card-number"> {cardCVC} </p>
          </div>
          <div className="front-card">
            <img className="card-logo" src={card_logo} alt="card-logo" />
            <p className="card-number"> {cardNumber} </p>
            <p className="card-name"> {cardName} </p>
            <p className="card-date" > {cardMonth + " / " + cardYear}  </p>
          </div>
        </div>
      </section>
      <section className="form-container">
        <section className="thank-you-container" style={{display:"none"}}>
          <img src={complete} alt="complete" />
          <h1> THANK YOU </h1>
          <span> We've added your card details </span>
        </section>

        <form onSubmit={handleSubmit(data => {console.log(data)})}>
          
          <label> CARDHOLDER NAME </label>
          <input
            className={errors.name ? "error" : ""}
            type="text" 
            id="name"
            value={cardInputName} 
            placeholder="e.g. Jane Appleseed" 
            onChangeCapture={(e) => {cardNameHandler(e.target.value)}}
            {...register('name')}
          />
          {
            errors.name?.message && <p> {errors.name?.message} </p>
          }

          <label> CARD NUMBER </label>
          <input 
            className={errors.number ? "error" : ""}
            type="number" 
            id="number"
            value={cardInputNumber}
            placeholder="e.g. 1234 5678 9123 0000" 
            onChangeCapture={(e) => {cardNumberHandler(e.target.value)}}
            {...register("number")}
          />
          {
            errors.number?.message && <p> {errors.number?.message} </p>
          }

          <div className="inline-inputs-container">
            <div className="date-inputs-container">
              <label> EXP. DATE (MM/YY) </label>
              <input 
                className={errors.mes ? "error" : ""}
                type="number" 
                id="mes"
                value={cardInputMonth} 
                placeholder="MM" 
                onChangeCapture={(e) => {cardMonthHandler(e.target.value)}}
                {...register('mes')}
              />
              <input 
                className={errors.year ? "error" : ""}
                type="number" 
                id="year"
                value={cardInputYear} 
                placeholder="YY" 
                onChangeCapture={(e) => {cardYearHandler(e.target.value)}}
                {...register('year')}
              />
              {
                errors.mes?.message && <p> {errors.mes?.message} </p>
              }
              {
                errors.year?.message && <p> {errors.year?.message} </p>
              }
            </div>
            
            <div className="cvc-inputs-container">
              <label> CVC </label>
              <input 
                className={errors.cvc ? "error" : ""}
                type="number"
                id="cvc"
                value={cardInputCVC} 
                placeholder="e.g. 123" 
                onChangeCapture={(e) => {cvcHandler(e.target.value)}}
                {...register('cvc')}
              />
              {
                errors.cvc?.message && <p> {errors.cvc?.message} </p>
              }
            </div>
          </div>

          <input className="submit" type="submit" value="Confirm" />

        </form>
      </section>
    </section>
  );
}

export default Home;
