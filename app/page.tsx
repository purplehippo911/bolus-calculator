"use client"

import { useState, useRef, useEffect } from "react";
import { pug } from "@/pug";

import Main from "./comps/main";
import Nav from "./comps/nav";

export default function Home() {

function useLocalNumber(key:string, defaultValue:number) {
  const [value, setValue] = useState(defaultValue);
  
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved !== null) setValue(parseFloat(saved));
  }, [key]);
  
  useEffect(() => {
    localStorage.setItem(key, value.toString());
  }, [key, value]);
  
  return [value, setValue] as const;
}
  const [IkValue, setIkValue] = useLocalNumber("IkValue", 10);
  const [KfValue, setKfValue] = useLocalNumber("KfValue", 2);
  const [TargetValue, setTargetValue] = useLocalNumber("TargetValue", 6);



	return (
		<div>
			<Nav IkValue={IkValue} setIkValue={setIkValue} KfValue={KfValue} setKfValue={setKfValue} TargetValue={TargetValue} setTargetValue={setTargetValue}/>
			<Main IkValue={IkValue} KfValue={KfValue} TargetValue={TargetValue}/>
		</div>


	);
}
