document.addEventListener('DOMContentLoaded', () => iniciarApp())

function iniciarApp() {
    abrirExperiencias();
    cerrarExperiencias();
}

function abrirExperiencias() {
    const body          = document.querySelector('body');

    const masInfo1      = document.querySelector('#masInfo1');
    const modalContent1 = document.querySelector('#modalContent1');

    const masInfo2      = document.querySelector('#masInfo2');
    const modalContent2 = document.querySelector('#modalContent2');

    const masInfo3      = document.querySelector('#masInfo3');
    const modalContent3 = document.querySelector('#modalContent3');

    masInfo1.addEventListener('click', () => {
        modalContent1.classList.remove('display-none');
        body.classList.add('overflowHidden');
    });

    masInfo2.addEventListener('click', () => {
        modalContent2.classList.remove('display-none');
        body.classList.add('overflowHidden');
    });

    masInfo3.addEventListener('click', () => {
        modalContent3.classList.remove('display-none');
        body.classList.add('overflowHidden');
    });
}

function cerrarExperiencias() {
    const body          = document.querySelector('body');

    const btnCerrar1    = document.querySelector('#btnCerrar1');
    const modalContent1 = document.querySelector('#modalContent1');

    const btnCerrar2    = document.querySelector('#btnCerrar2');
    const modalContent2 = document.querySelector('#modalContent2');

    const btnCerrar3    = document.querySelector('#btnCerrar3');
    const modalContent3 = document.querySelector('#modalContent3');

    btnCerrar1.addEventListener('click', () => {
        modalContent1.classList.add('display-none');
        body.classList.remove('overflowHidden');
    });

    btnCerrar2.addEventListener('click', () => {
        modalContent2.classList.add('display-none');
        body.classList.remove('overflowHidden');
    });

    btnCerrar3.addEventListener('click', () => {
        modalContent3.classList.add('display-none');
        body.classList.remove('overflowHidden');
    });
}