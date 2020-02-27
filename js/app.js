

    let subtotal = document.getElementById("subtotal");
    let taxRate = document.getElementById("taxRate");
    let  SalesTax = document.getElementById("salesTax");
    let  total = document.getElementById("total");
    const calculateBtn = document.getElementById("calculateBtn");
    const clearBtn = document.getElementById("clearBtn");
    
    
    console.log(parseFloat(subtotal.value) + parseFloat(taxRate.value));
    
    calculateBtn.addEventListener("click", () => {
        if( (parseFloat(subtotal.value)  > 0)  &&  ( (parseFloat(taxRate.value)  > 0)  && (parseFloat(taxRate.value)  < 20) )) {
        total.value = (parseFloat(subtotal.value) + (parseFloat((taxRate.value)/100)* parseFloat(subtotal.value)) + parseFloat(SalesTax.value)*parseFloat(subtotal.value));
        }
        else {
            alert("Invalid input");
        }
    });
    
    clearBtn.addEventListener("click", () => {
        subtotal.value = null;
        taxRate.value = null;
        total.value = null;
    });
    
