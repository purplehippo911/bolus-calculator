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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setDarkMode(saved === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

	return (
		<div>
			<Nav IkValue={IkValue} setIkValue={setIkValue} KfValue={KfValue} setKfValue={setKfValue} TargetValue={TargetValue} setTargetValue={setTargetValue} darkMode={darkMode} setDarkMode={setDarkMode}/>
			<Main IkValue={IkValue} KfValue={KfValue} TargetValue={TargetValue} darkMode={darkMode}/>
		</div>


	);
}
