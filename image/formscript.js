function validate()
{ var n=validatename();
  var p=validatephno();
  var m=validatemail();
  if((n&&p)&&(p&&m))
	return true;
	else
	return  event.preventDefault();
}


function validatename()
{	var a=document.getElementById("name").value;
    var p="[A-Za-z]+"
	if(!a.match(p))
    { document.getElementById("nameerror").innerHTML="Enter only alphabets";
	return false;}
	else
	{document.getElementById("nameerror").innerHTML="";
	return true;}
}

function validatephno()
{	var a=document.getElementById("phno").value;
    var p="[0-9]{10}"
	if(!a.match(p))
	{document.getElementById("phnoerror").innerHTML="Please enter contact number : 10 digits only ";
return false;}
	else
	{document.getElementById("phnoerror").innerHTML="";
return true;}
}


function validatemail()
{	var a=document.getElementById("mail").value;
    var p="^[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$"
    if(!a.match(p))
	{	document.getElementById("mailerror").innerHTML="Please enter mail ID in standard format ";
		return false;}
	else
	{	document.getElementById("mailerror").innerHTML=" ";
		return true;}
}

function validatepass()
{	var a=document.getElementById("pass").value;
    var p="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    if(!a.match(p))
	{	document.getElementById("passerror").innerHTML="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
		return false;}
	else
	{
		document.getElementById("passerror").innerHTML=" ";
		return true;}
	
}
