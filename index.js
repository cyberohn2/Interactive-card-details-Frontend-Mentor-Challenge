
    let form = document.getElementById("form");
    let cardHolder = document.getElementById("cardname");
    let cardNumber = document.getElementById("cardnumber");
    let cardMonth = document.getElementById("cardmonth");
    let cardYear = document.getElementById("cardyear");
    let CVC = document.getElementById('cvcvalue');


    let cardHoldervalue = cardHolder.value.trim();
    let cardNumbervalue = cardNumber.value;
    cardNumbervalue = Number(cardNumbervalue);
    let cardMonthvalue = cardMonth.value;
    cardMonthvalue = Number(cardMonthvalue);
    let cardYearvalue = cardYear.value;
    cardYearvalue = Number(cardYearvalue);
    let CVCvalue = CVC.value;
    CVCvalue = Number(CVCvalue);


    let cardHolderOutput = document.getElementById("holdername");
    let cardNumberOutput = document.getElementById("cardnum");
    let cardMonthOutput = document.getElementById("month");
    let cardYearOutput = document.getElementById("year");
    let CVCOutput = document.getElementById("cvc");

    let thankYou = document.getElementById("thankyou");






    function formValidation() {
        let cardHoldervalue = cardHolder.value.trim();
        let cardNumbervalue = cardNumber.value;
        cardNumbervalue = Number(cardNumbervalue);
        let cardMonthvalue = cardMonth.value;
        cardMonthvalue = Number(cardMonthvalue);
        let cardYearvalue = cardYear.value;
        cardYearvalue = Number(cardYearvalue);
        let CVCvalue = CVC.value;
        CVCvalue = Number(CVCvalue);

    if (cardHoldervalue == "") {
        setError(cardHolder, "Can't be blank!");
    }else{
        setSuccess(cardHolder);
    }

    if (cardNumbervalue == "" ) {
        setError(cardNumber, "Can't be blank!");
    } else if( isNaN(cardNumbervalue)){
        setError(cardNumber, "Wrong format, numbers only");
    }else{
        setSuccess(cardNumber);
    }

    if (cardMonthvalue == "") {
        setError(cardMonth, "Can't be blank!");
    } else if( isNaN(cardMonthvalue)){
        setError(cardMonth, "numbers only");
    }
    else {
        setSuccess(cardMonth);
    }

    if (cardYearvalue == "") {
        setError(cardYear, "Can't be blank!");
    } else if( isNaN(cardYearvalue)){
        setError(cardYear, "numbers only");
    }
    else {
        setSuccess(cardYear);
    }

    if (CVCvalue == "") {
        setError(CVC, "Can't be blank!");
    } else if( isNaN(CVCvalue)){
        setError(CVC, "numbers only");
    }
    else {
        setSuccess(CVC);

    }
    return true;

}

function something() {
    if( CVC.parentElement.className == "input-control success" &&
    cardHolder.parentElement.className =="input-control success" &&
    cardNumber.parentElement.className =="input-control success" &&
    cardMonth.parentElement.className =="input-control success" &&
    cardYear.parentElement.className =="input-control success"){
form.style.display = "none";
thankYou.style.display = "flex";
thankYou.style.animation = "myAnimation";
thankYou.style.animationDuration = "300ms";
document.getElementById("error-message").innerHTML = "";
}
}






function updateCardHolder () {
let cardvalue = document.getElementById("cardname").value;
document.getElementById("holdername").innerHTML = cardvalue;
if(cardvalue == ""){
    document.getElementById("holdername").innerHTML = "Jane Appleseed";
}
}

function updateNumber () {
    let cardnum = document.getElementById("cardnumber").value;

    let First4 = cardnum.slice("0","4");
    let Second4 = cardnum.slice("4","8");
    let Third4 = cardnum.slice("8","12");
    let Last4 = cardnum.slice("12");


    if(cardnum == ""){
        document.getElementById("cardnum").innerHTML = "0000  0000  0000  0000";
    }else{

        document.getElementById("cardnum").innerHTML =  `${First4}   ${Second4}   ${Third4}   ${Last4}`;
    }

    }

    function updateMonth () {
        let Monthvalue = document.getElementById("cardmonth").value;
        document.getElementById("month").innerHTML = Monthvalue;
        if(Monthvalue == ""){
            document.getElementById("month").innerHTML = "00";
        }
        }

        function updateYear () {
            let Yearvalue = document.getElementById("cardyear").value;
            document.getElementById("year").innerHTML = Yearvalue;
            if(Yearvalue == ""){
                document.getElementById("year").innerHTML = "00";
            }
            }

            function updateCVC () {
                let CVCvalue = document.getElementById("cvcvalue").value;
                document.getElementById("cvc").innerHTML = CVCvalue;
                if(CVCvalue == ""){
                    document.getElementById("cvc").innerHTML = "000";
                }
                }







function setError (element, message) {
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector('.error-message');

    errorMessage.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess (element){
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector('.error-message');

    errorMessage.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}