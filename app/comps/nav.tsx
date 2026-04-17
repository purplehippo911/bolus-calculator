import { pug } from "@/pug";
import { useRef, useState } from "react";

export default function Nav() {

// add text warning animation. one for saying that they should be careful and we dont take responsiblity. also one to warn them that we use mmol/l and grams. maybe output the value as mmol/l in result and in inputs highlight

// first grab the element
const gearIcon = useRef<HTMLStrongElement>(null);
const [navIsOpen, setNavIsOpen] = useState(false);

function clickHandle() {
	if (!navIsOpen) {
		setNavIsOpen(true);
	} else {
		setNavIsOpen(false);
	}	
}

// change value of stuff using useState

	return (
	 <nav>

	{!navIsOpen &&
		(
	 <section className="nav_section">

	  <p className="nav_p"> Click on this gear to change settings --> </p>
	  <strong ref={gearIcon} 
	  onClick={clickHandle}
	  className="gearIcon"> &#9881; </strong>
	  </section>
	)
	}
	
	{ navIsOpen && (
		<section className="nav_section active">
		<h1> hi</h1>
	        <strong ref={gearIcon} 
	  onClick={clickHandle}
	  className="gearIcon"> &#10006; </strong>
	</section>
	)
		}
	</nav>
	)
}
