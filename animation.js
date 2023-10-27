(function () {
    // Utiliza un bucle para simplificar la repetición de código
    for (let i = 1; i <= 5; i++) {
        let pregunta = document.querySelector(`#navbar${i}`);
        let flecha = document.querySelector(`#arrow${i}`);

        flecha.addEventListener('click', () => {
            pregunta.classList.toggle('open');
        });
    }
})();
