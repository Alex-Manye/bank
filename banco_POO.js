"use strict";
var arrayClients=[];
var arrayBankAccount=[];
var balance = 0; 
/*Diseñar un programa para un banco que permita hacer el control de una cuenta corriente. El programa debe tener la clase Cuenta que tiene los siguientes datos:
- Titular
- Saldo
- Número de movimientos realizados sobre la cuenta bancaria
*/

class Client{
    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
        this._arrayBankAccount = [];
    }

    get name(){
        return this._name;
    }

    get lastName(){
        return this._lastName;
    }

    get arrayBankAccount(){
        return this._arrayBankAccount;
    }

    set arrayBankAccount(arrayBankAccount){
        this._arrayBankAccount=arrayBankAccount;
    }

}

class BankAccount {
    constructor(balance, accountNumber){ 
        this._balance= balance;
        this._accountNumber=accountNumber;
        this._numMoviments=0;

    }
        set numMoviments(numMoviments){
            this._numMoviments=numMoviments;
        }
        
        set balance(balance){
            this._balance=balance;
        }

        get numMoviments(){
            return this._numMoviments;
        }

        get balance(){
            return this._balance;
        }
        
        get accountNumber(){
            return this._accountNumber;
        }

       //permet ingressar diners en el compte del client i incrementa el 
       //número de moviments
        depositAc(amount) {
            this._balance = this._balance + amount;
            //this._balance += amount;
            console.log (this._balance);
            this._numMoviments = this._numMoviments + 1;
        } 

        withdrawAc(amount){
            this._balance = this._balance - amount;
            this._numMoviments = this._numMoviments +1;
        }

        //retorna quants diners hi ha en el compte.
        balanceAc(){
            document.getElementById("demo").innerHTML= `Your balance is ${this._balance} €`
            console.log(this._balance)
        } 
        
        //retorna el número de transaccions que s'han realitzat
       transactionNumberAc(){
           document.getElementById("demo").innerHTML=`the number of transactions done in your bank account number ${this._accountNumber} is ${this._numMoviments}`
       }

}

//CREO USUARIOS y CUENTAS PARA HACER ITERACIONES
var alex = new Client ("alex2","pp");
arrayClients.push(alex);
var bAcc2 = new BankAccount (0,987654321);
var bAcc = new BankAccount (0,123456789);
alex.arrayBankAccount.push(bAcc);
alex.arrayBankAccount.push(bAcc2);
console.log("********");
console.log(alex.arrayBankAccount[0].accountNumber);
console.log(alex.arrayBankAccount[0].accountNumber);
console.log(alex);
///////////

function clientCreate(){
    let name = (document.getElementById("clientName")).value; 
    let lastName= (document.getElementById("clientLastName")).value; 

    let client = new Client(name, lastName);
    arrayClients.push(client);
    console.log(arrayClients);
}

function bankAccountCreate(){
    let owner = (document.getElementById("clientName2")).value; 
    let accountNumber = parseInt((document.getElementById("bankAccountNumber2")).value); 

    let bankAccount = new BankAccount(0, accountNumber);
    arrayBankAccount.push(bankAccount);

    clientMatchAccount(owner, bankAccount);
    console.log("el bank account está bien hecho");
    console.log(arrayBankAccount);
    
}


function clientMatchAccount(owner, bankAccount){
    //juntar name amb owner bank account
    for (let i=0;i<arrayClients.length;i++){
        if (owner == arrayClients[i].name){
 
        //fico el compte a l'array de bancs accounts de l'array del client
        arrayClients[i].arrayBankAccount.push(bankAccount)
        console.log(arrayClients[i])
        } 
       
    }
}

//permet ingressar diners en el compte del client i incrementa el 
//número de moviments

function deposit(){
    let owner = (document.getElementById("clientName3")).value; 
    let accountNumberClient = parseInt((document.getElementById("bankAccountNumber3")).value);
    let amount = parseInt((document.getElementById("amount")).value);
    console.log(amount)

    for (let i=0; i<arrayClients.length;i++){
        if (owner == arrayClients[i].name) {
            console.log(arrayClients[i].name)
            
            for (let j=0; j<arrayClients[i].arrayBankAccount.length;j++){
                console.log("*****");
                console.log(arrayClients[i])
                //itero l'array dels banks accounts dintre de l'array dels clients.
                if (accountNumberClient == arrayClients[i].arrayBankAccount[j].accountNumber){
                arrayClients[i].arrayBankAccount[j].depositAc(amount);
                console.log(arrayClients[i].arrayBankAccount[j].accountNumber)
                //console.log(arrayClients[i].balance);
                //console.log(arrayClients);
                }
            }
        }
    }
}

    //permet treure diners del compte sempre que hi hagi prou saldo, 
        //també incrementarà el número de moviments.

function withdraw(){
    let owner = (document.getElementById("clientName3")).value; 
    let accountNumberClient = parseInt((document.getElementById("bankAccountNumber3")).value);
    let amount = parseInt((document.getElementById("amount")).value);
    console.log(accountNumberClient);
    console.log(amount);

    for (let i=0; i<arrayClients.length; i++){
        if (owner == arrayClients[i].name){

            for (let j=0; j<arrayClients[i].arrayBankAccount.length; j++){
                if (accountNumberClient == arrayClients[i].arrayBankAccount[j].accountNumber){
                    if (arrayClients[i].arrayBankAccount[j].balance > amount){
                    arrayClients[i].arrayBankAccount[j].withdrawAc(amount);
                    document.getElementById("demo").innerHTML = `You have withdraw ${amount}in your ${accountNumberClient}. Your balance is ${arrayClients[i].arrayBankAccount[j].balance}`
                } else {
                    document.getElementById("demo").innerHTML = `There is not enought money in your bank account nº ${accountNumberClient}`
                }

                }
            }
        }
    }
}

//retorna quants diners hi ha en el compte.

function balance2(){
    let owner = (document.getElementById("clientName4")).value; 
    let accountNumberClient = parseInt((document.getElementById("bankAccountNumber4")).value);

    for(let i=0; i<arrayClients.length;i++){
        if (owner == arrayClients[i].name){
        for (let j=0; j<arrayBankAccount.length; j++){
            if (accountNumberClient == arrayClients[i].arrayBankAccount[j].accountNumber){
                arrayClients[i].arrayBankAccount[j].balanceAc();
            } else {    
                document.getElementById("demo").innerHTML = `Account nº ${accountNumberClient} not found`
            }
        }
        }
    }
}
//retorna el número de transaccions que s'han realitzat
function transactionNumber(){
    let owner = (document.getElementById("clientName4")).value; 
    let accountNumberClient = parseInt((document.getElementById("bankAccountNumber4")).value);

    for(let i=0; i<arrayClients.length;i++){
        if (owner == arrayClients[i].name){
        for (let j=0; j<arrayBankAccount.length; j++){
            if (accountNumberClient == arrayClients[i].arrayBankAccount[j].accountNumber){
                arrayClients[i].arrayBankAccount[j].transactionNumberAc();
            } else {    
                document.getElementById("demo").innerHTML = `Account nº ${accountNumberClient} not found`
            }
        }
        }
    }
}


