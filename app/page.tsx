"use client"

import { useState, useRef } from "react";
import { pug } from "@/pug";

import Main from "./comps/main.tsx";
import Nav from "./comps/nav.tsx";

export default function Home() {

  const [IkValue, setIkValue] = useState(10);
  const [KfValue, setKfValue] = useState(2);
  const [TargetValue, setTargetValue] = useState(6);



	return (
		<div>
			<Nav IkValue={IkValue} setIkValue={setIkValue} KfValue={KfValue} setKfValue={setKfValue} TargetValue={TargetValue} setTargetValue={setTargetValue}/>
			<Main IkValue={IkValue} KfValue={KfValue} TargetValue={TargetValue}/>
		</div>


	);
}
