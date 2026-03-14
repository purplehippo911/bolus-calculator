
- if they can login and we assign the values to them using something like firebase to save data to calculate needed. would need a login page with google.
- redirect to home page where input least meal time, 
- necessary setup info "insulin type", target range (f.ex 5-10mmol/l). insulin correctoin faktor (kf), insulin-carbo ratio (ik-verdi)
- default info: assume acting time is 3 hours. uses grams, mmol/l, type 1
- user input info everytime: current ik faktor (bcs can change based on day. also should turn this into a number from a comma in case), carbs ate, current blood sugar.)
- calculation goes like this:
target_blood_sugar

carbs eaten / ik = carb bolus

find target range difference (by subtracting both)
10-5 = 5
current blood sugar - difference / kf = correction bolus

- test by using a json default file now for yourself. then swap it out with firebase database later on.
- future change: better ui
- future feautre: be able to change the setup infos.
- warning thm ahead of all the different insuin i use.


important questions that needs answering:
- does insulin type affect how much insulin you need. so if i used fiasp or actrapid would the dosage still be the same? is it a big difference between a fast-acting and normal acting insulin dosages? are the dosages usually the same as long as they're the same type. 