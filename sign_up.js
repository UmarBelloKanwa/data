empty = "Empty ' ' input";
greater = " don't it to be greater than ' ' alphabets";
less = greater.replace("greater than", "less than");
numPunErr = "You can't use numbers and punctuation marks";
//punctuation = ([:.]);
function myProfile() {
   if (fullName.value.length === 0) {
     error1.innerHTML = empty.replace("' '", "Full Name")}
   else { 
      if (fullName.value.search(/[^a-zA-]/g) != -1 ) {
        error1.innerHTML = numPunErr}  else{
   fullNameQuality = (fullName.value.length > 15 || fullName.value.length < 7) ? less.replace("' '", 11) +
   " and" + greater.replace("' '", "15") : "" ; (error1.innerHTML = fullNameQuality ); } }
}