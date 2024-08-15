function sendForm(event) {
    event.preventDefault();
    const quantity = document.getElementById('quantity').value;
    const codesArray = [];

    for (let i = 0; i < quantity; i++) {
        codesArray.push(generateCustomCode());
    }
    displayCodes(codesArray);
}

function generateCustomCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    var customCode = '';
    // Genera la primera letra
    const firstLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    
    // Genera los dos primeros números
    const firstTwoNumbers = numbers.charAt(Math.floor(Math.random() * numbers.length)) +
                            numbers.charAt(Math.floor(Math.random() * numbers.length));
    
    // Genera la segunda letra
    const secondLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    
    // Genera los cuatro números finales
    const lastFourNumbers = numbers.charAt(Math.floor(Math.random() * numbers.length)) +
                            numbers.charAt(Math.floor(Math.random() * numbers.length)) +
                            numbers.charAt(Math.floor(Math.random() * numbers.length)) +
                            numbers.charAt(Math.floor(Math.random() * numbers.length));
    
    // Combina todas las partes para formar el código final
    customCode = firstLetter + firstTwoNumbers + secondLetter + lastFourNumbers + ' ';
    return customCode;
}

function displayCodes(codesArray) {
    const codesListDiv = document.getElementById('codesList');
    codesListDiv.innerHTML = ''; // Limpia la lista anterior

    codesArray.forEach(code => {
        const codeElement = document.createElement('small');
        codeElement.textContent = code;
        codesListDiv.appendChild(codeElement);
    });
}

function compareMultipleCodes(e) {
    e.preventDefault();

    const codesInput = document.getElementById('codes').value.trim();
    const codesArray = codesInput.split(' ').map(code => code.trim());
    
    const allEqual = codesArray.every((code, index, array) => code === array[0]);

    let resultMessage = '';

    if (allEqual) {
        resultMessage = 'Todos los códigos son iguales.';
    } else {
        resultMessage = 'Los códigos son diferentes.';
    }

    displayResult(resultMessage);
}

function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}

function copyText() {
    // Seleccionar el contenido del div
    let textToCopy = document.getElementById('codesList').innerText;
    // Crear un elemento de texto temporal
    let tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Seleccionar el texto en el área de texto temporal
    tempTextArea.select();

    // Copiar el texto al portapapeles
    document.execCommand('copy');

    // Eliminar el área de texto temporal
    document.body.removeChild(tempTextArea);
}
