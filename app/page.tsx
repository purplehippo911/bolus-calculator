"use client"

import { useState, useRef } from "react";
import { pug } from "@/pug";
import {bolusCalculator} from "./utils/boluscalc";

export default function Home() {

  const [ result, setResult ] = useState(0);
  const [ showResult, setShowResult ] = useState(false);

  const inputCarb = useRef<HTMLInputElement>(null);
  const inputBS = useRef<HTMLInputElement>(null);
  const heading2 = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setShowResult(false);
    const a = parseInt(inputCarb.current?.value || "0", 10);
    const b = parseInt(inputBS.current?.value || "0", 10);

    // Validate non-empty. carbs input is allowed to be empty in case you didnt eat anything.
    if (!b) {
      alert("Please fill all fields");
      return;
    }

    const calcResult = bolusCalculator(a, b);
    setResult(calcResult);
    setShowResult(true);    
  };


  return pug`
    main
      h1 Bolus Calculator

      form(onKeyDown=${(e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleClick();
        }
      }})
        section.form_section
          label Carbs (g)
          input(type="number", ref=${inputCarb})
        section.form_section
          label Current Blood Sugar (mmol/l)
          input(type="number", ref=${inputBS})
        input(type="button", value="Submit", onClick=${handleClick}).form_btn
  
     
      h2 Result 
      h3 #{result.toFixed(1)}

  `;
}
