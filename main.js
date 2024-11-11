const account = {
    accountName: "Lars Larsson",
    balance: 10000,         
  
    getBalance: function() {
      alert(`Your balance is $${this.balance}`);
    },
  
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        alert(`$${amount} deposited. New balance is $${this.balance}`);
      } else {
        this.accountError("Invalid deposit amount.");
      }
    },
  
    withdrawal: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        alert(`$${amount} withdrawn. New balance is $${this.balance}`);
      } else {
        this.accountError("Invalid withdrawal amount.");
      }
    },
  
    getAccountName: function() {
      alert(`Account holder: ${this.accountName}`);
    },
  
    accountError: function(message) {
      alert(`Error: ${message}`);
    }
  };

function atm() {
    const message = parseInt(
      prompt(
        "Select a choice:\n1.) See balance\n2.) Make a deposit\n3.) Make a withdrawal\n4.) Get account name\n5.) Exit"
      )
    );
  
    switch (message) {
      case 1:
        account.getBalance();
        break;
      case 2:
        const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
        if (!isNaN(depositAmount)) {
          account.deposit(depositAmount);
        } else {
          account.accountError("Invalid input for deposit.");
        }
        break;
      case 3:
        const withdrawalAmount = parseFloat(prompt("Enter amount to withdraw:"));
        if (!isNaN(withdrawalAmount)) {
          account.withdrawal(withdrawalAmount);
        } else {
          account.accountError("Invalid input for withdrawal.");
        }
        break;
      case 4:
        account.getAccountName();
        break;
      case 5:
        console.log("Thank you for using the ATM. Goodbye!");
        return;
      default:
        account.accountError("Invalid option selected. Please try again.");
        break;
    }
  
    atm();
  }

  atm();