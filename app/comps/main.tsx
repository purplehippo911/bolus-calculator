import { pug } from "@/pug";
import {bolusCalculator} from "../utils/boluscalc";
import { useState, useRef } from "react";

type Props = {
  IkValue: number;
  KfValue: number;
  TargetValue: number;
  darkMode: boolean;
};

export default function Main({IkValue, KfValue, TargetValue, darkMode}: Props ) {
	
  const [ result, setResult ] = useState(0);
  const [ showResult, setShowResult ] = useState(false);
  const [ warningStatus, setWarningStatus] = useState(true);
 
  const inputCarb = useRef<HTMLInputElement>(null);
  const inputBS = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setShowResult(false);
    const a = parseInt(inputCarb.current?.value || "0", 10);
    const b = parseInt(inputBS.current?.value || "0", 10);

    // Validate non-empty. carbs input is allowed to be empty in case you didnt eat anything.
    if (!b) {
      alert("Please fill in field for blood sugar");
      return;
    }
    else if (b < 5) {alert("The blood sugar you inputted was too low. Remember this app uses mmol/l no support for mg/l etc. Else, you might want to get your blood sugar up!"); return}
    else if (b >= 14) {alert("The blood sugar you inputted seems high. Remember this app uses mmol/L no support for mg/l etc. Else, you might need some insulin")}
    else if (a > 500) {alert("You've inputted a too high amount of carbs."); return}

    const calcResult = bolusCalculator(a, b, IkValue, KfValue, TargetValue);
    setResult(calcResult);
    setShowResult(true);    
  };

  return pug`
    main
      h1.title Bolus Calculator

      form(onKeyDown=${(e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleClick();
        }
      }})
        section.form_section
          label Carbs (g)
          input(type="number", ref=${inputCarb}, placeholder="grams")
        section.form_section
          label Current Blood Sugar (mmol/l)
          input(type="number", ref=${inputBS}, placeholder="mmol/l")
        input(type="button", value="Submit", onClick=${handleClick}).form_btn
  
      if warningStatus
       section(onClick=${() => setWarningStatus(false)}).warning-text
        h3 The result you get here is only an estimation. By continuing further you agree to take the risks. Be careful!
        label wanna remove this warning?
        input(type="checkbox" onClick=${() => setWarningStatus(false)})

      section.result 
       

       h1 Result 
       p #{result.toFixed(1)} 
       strong mmol/l

      p This is a PWA app, meaning you can add it to your phone screen as a shortcut depending on what browser you use. Can do the same thing on Desktop as well. 

      a(href="https://github.com/purplehippo911/bolus-calculator", target="_blank") 
       if !darkMode
        img(src="/githubBlackIcon.svg", alt="github white icon")
       else 
        img(src="/githubWhiteIcon.svg", alt="github dark icon")
       p Source Code
  `;

}

