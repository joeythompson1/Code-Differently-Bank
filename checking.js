var balance = 2000.00;

function withdrawl(w_amount){
    if (w_amount > balance) {
        alert("Insufficient Funds :(, your balance is only " + balance);
        return false;
    }
    else if(balance == 0.00 || balance == 0){
        alert("Insufficient Funds :(, your balance is only " + balance);
        return false;
    } 
    else{
        balance = parseInt(balance, 10) - parseInt(w_amount, 10);
        alert("Successful transaction, \n your balance is now " + balance);
    }
}

function withdrawlAmount() {
    var w_amount = document.getElementById("w_amount").value;
	withdrawl(w_amount);
}

document.getElementById("w_btn").addEventListener("click", withdrawlAmount);
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
function deposit(d_amount) {
    if (d_amount <= 0) {
        alert("Cannot deposit zero or less dollars buddy :(, \n thats impossible.");
        return false;
    }
    else{
        balance = parseInt(balance, 10) + parseInt(d_amount, 10);
        alert("Successful transaction, \n your balance is now " + balance);
    }
}

function depositAmount() {
    var d_amount = document.getElementById("d_amount").value;
    deposit(d_amount);
}

document.getElementById("d_btn").addEventListener("click", depositAmount);
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
function checkBalance() {
    alert("Your balance is, " + balance);
}