import { pug } from "@/pug";
import { useRef, useState } from "react";

type Props = {
  IkValue: number;
  setIkValue: React.Dispatch<React.SetStateAction<number>>;
  KfValue: number;
  setKfValue: React.Dispatch<React.SetStateAction<number>>;
  TargetValue: number;
  setTargetValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function Nav({IkValue, setIkValue, KfValue, setKfValue, TargetValue, setTargetValue}: Props ) {

// add text warning animation. one for saying that they should be careful and we dont take responsiblity. also one to warn them that we use mmol/l and grams. maybe output the value as mmol/l in result and in inputs highlight

// first grab the element
const gearIcon = useRef<HTMLElement | null>(null);
const IkInput = useRef<HTMLInputElement>(null);
const TargetInput= useRef<HTMLInputElement>(null);
const KfInput = useRef<HTMLInputElement>(null);

const [navIsOpen, setNavIsOpen] = useState(false);
const [isSaved, setIsSaved] = useState(false);

function clickHandle() {
	if (!navIsOpen) {
		setNavIsOpen(true);
	} else {
		setNavIsOpen(false);
	}	
}


const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

const handleSubmit = async () => {
	const a = parseInt(IkInput.current?.value || "0", 10);
    const b = parseInt(TargetInput.current?.value || "0", 10);
    const c = parseInt(KfInput.current?.value || "0", 10);

    // Validate non-empty. carbs input is allowed to be empty in case you didnt eat anything.
    if (!b || !a) {
      alert("Please fill all fields");
      return;
    }

    if (b > 12) {
    	alert("Too high target blood sugar value were given");
	return;
    } else if (a > 30){
	alert("Too high Insulin:Carb value given");return
    } else if (a < 5) {
	alert("Too low insulin:carb value given");return
    } else if (b < 4) {
	alert("Too low target bloodsugar value given"); return;
    } else if (c > 5) {
	alert("Too high Correction Factor"); return;
    } else if (c < .5) {
	alert("Too low correction factor"); return;
    } else if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) { alert("We only accept numbers and decimals, meaning you wrote smth wrong!"); return}
 
    setIkValue(a);
    setTargetValue(b);
    setKfValue(c);

    setIsSaved(true);
    await sleep(500);
    setIsSaved(false);
    setNavIsOpen(false);
  
}

document.addEventListener("keydown", (e: React.KeyboardEvent) => {

	if (e.key === "Escape") {
		setNavIsOpen(false);
	}
});


	return (
	 <nav>

	{!navIsOpen &&
		(
	 <section className="nav_section">

	  <p className="nav_p"> Click on this gear to change settings {"-->"} </p>
	  <strong ref={gearIcon} 
	  onClick={clickHandle}
	  className="gearIcon"> &#9881; </strong>
	  </section>
	)
	}
	
	{ navIsOpen && (
		<section className="nav_section active">
		<form className="active" onKeyDown={(e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSubmit();
		}
		}}>

			<p> Ask ur doctor before changing these settings, if you're unsure: </p>
			<section>
			<label data-tooltip="The insulin to carbohydrate ratio tells you how
many grams of carbohydrates are covered by
one unit of insulin"> Insulin:Carbs &#10068;</label>
			<input type="number" placeholder={String(IkValue)} ref={IkInput}/>
			</section>
			<section>
				<label data-tooltip="The median of the range, where your blood sugar is stable" data-id="firstInput" > Target Bloodsugar &#10068; </label>
				<input type="number" placeholder={String(TargetValue)} ref={TargetInput} />
			</section>
			<section>
				<label data-tooltip="CF is how many points the blood sugar will
drop with 1 unit of insulin. "> Correction factor (KF) &#10068; </label>
				<input type="number" placeholder={String(KfValue)} ref={KfInput} />
			</section>

		<input type="button" value="Submit" className="form_btn nav_btn" onClick={handleSubmit} />
		{isSaved && (
			<p className="saved"> saved </p>
		)}
		</form>
	        <strong ref={gearIcon} 
	  onClick={clickHandle}
	  className="gearIcon"> &#10006; </strong>
	</section>
	)
		}
	</nav>
	)
}
