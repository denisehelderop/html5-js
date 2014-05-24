var teller1 = 0
function tel1(elementId)
{
		teller1 += 1;
		document.getElementById(elementId).innerHTML = teller1;
}
	var teller2 = 0;
function tel2(elementId)
{
		teller2 += 1;
		document.getElementById(elementId).innerHTML = teller2;
}
//alle functies uitschrijven dan hoef je niets speciaals te doen. als je dit niet wilt omdat het veel tijd kost en ze 
//in principe allemaal hetzelfde doen kun je Arrays gebruiken. Zie opdracht tellerPro