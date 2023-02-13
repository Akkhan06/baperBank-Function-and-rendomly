document.getElementById('widthdraw').addEventListener('click', function(){

    const inputValue = getDeposit('widthdrawInput');
    const elementNumber = getElimentValue('widthdrawText');
    const totalValue = inputValue + elementNumber;
    setValue('widthdrawText', totalValue)

    
    const inputBalence = getElimentValue('balence');
    const totalBalence = inputBalence - inputValue;
    setValue('balence', totalBalence)

})
