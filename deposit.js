function getDeposit(inputId){
    const input = document.getElementById(inputId)
    const inputString = input.value;
    const inputStringFloat = parseFloat(inputString);
    input.value = '';
    return inputStringFloat;
}

function getElimentValue(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const elementValueFloat = parseFloat(elementValue);
    return elementValueFloat;
}

function setValue(setId, setInner){
    const setIdValue = document.getElementById(setId);
    setIdValue.innerText = setInner;
}


document.getElementById('deposit').addEventListener('click', function(){

    const inputValue = getDeposit('depositInput');
    const elementNumber = getElimentValue('depositText');
    const totalValue = inputValue + elementNumber;
    setValue('depositText', totalValue)

    
    const inputBalence = getElimentValue('balence');
    const totalBalence = inputBalence + inputValue;
    setValue('balence', totalBalence)

})
