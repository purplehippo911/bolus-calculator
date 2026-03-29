"use client"

import { useState, useRef } from "react";
import { pug } from "@/pug";
import {bolusCalculator} from "./boluscalc";

export default function Home() {

  const [ result, setResult ] = useState(0);

  const inputCarb = useRef<HTMLInputElement>(null);
  const inputBS = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const a = parseInt(inputCarb.current?.value || "0", 10);
    const b = parseInt(inputBS.current?.value || "0", 10);

    // Validate non-empty
    if (!a || !b) {
      alert("Please fill all fields");
      return;
    }

    const calcResult = bolusCalculator(a, b);
    setResult(calcResult);
  };

  return pug`
    main
      h1 Bolus Calculator

      form
        section.form_section
          label Carbs (g)
          input(type="numbers", ref=${inputCarb})
        section.form_section
          label Current Blood Sugar (mmol/l)
          input(type="numbers", ref=${inputBS})
        input(type="button", value="Submit", onClick=${handleClick}).form_btn
  
      h2 Result
      h3 #{result.toFixed(1)}

  `;
}
