
/*
 * http://www.w3schools.com/js/js_arrays.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
var tellers = [0, 0, 0]; /*tussen gekke haakjes staat een array*/
var tekstjes = [
	"aap", "noot", "mies",
	"wim", "jet", "oink"
];
function tel(elementId, tellerNummer, optellen){
	/*
	 * tellers[tellerNummer] wordt opgehoogd en daarna wordt de waarde
	 * van tellers[tellerNummer] in element met elementId gezet.
	 */
		tellers[tellerNummer] = (tellers[tellerNummer] + optellen) % tekstjes.length;
		document.getElementById(elementId).innerHTML = tekstjes[tellers[tellerNummer]];

}
/*JavaScript arrays are used to store multiple values in a single variable.*/

