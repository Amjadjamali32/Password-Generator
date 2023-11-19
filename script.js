document.addEventListener('DOMContentLoaded', function () {
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const numbers = document.getElementById('numbers');
    const symbols = document.getElementById('symbols');
    const lengthInput = document.getElementById('length');
    const generateButton = document.getElementById('generatebtn');
    const passwordInput = document.getElementById('inputText');
    const copyButton = document.getElementById('copybutton');

    const generatePassword = () => {
        const charset = [
            uppercase.checked ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
            lowercase.checked ? 'abcdefghijklmnopqrstuvwxyz' : '',
            numbers.checked ? '0123456789' : '',
            symbols.checked ? '!@#$%^&*()-_=+[]{}|;:,.<>?' : ''
        ].join('');

        let password = '';
        for (let i = 0; i < lengthInput.value; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        passwordInput.value = password;
    };

    const copyToClipboard = () => {
        passwordInput.select();
        document.execCommand('copy');
        copyButton.style.backgroundColor = "green";
        setTimeout(()=>{
            copyButton.style.backgroundColor = "black";
        },2000);
    };

    generateButton.addEventListener('click', generatePassword);
    copyButton.addEventListener('click', copyToClipboard);

    generatePassword(); // Generate a password on page load
});