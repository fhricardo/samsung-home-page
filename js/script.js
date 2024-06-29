const BudsColor = document.querySelectorAll('input[name="CorBuds"]')
const Buds = document.getElementById('Buds')
const BudsColorName = document.getElementById('BudsColorName')

BudsColor.forEach(radio => {
    radio.addEventListener('change', (event) => {
        let Color = event.target.value
        BudsColorName.innerHTML = Color
        Buds.src = `assets/recomendados/br-galaxy-buds-fe-sm-${Color}.webp`
    });
});

const CorfitColor = document.querySelectorAll('input[name="Corfit3"]')
const Corfit = document.getElementById('Corfit')
const CorfitName = document.getElementById('CorfitName')

CorfitColor.forEach(radio => {
    radio.addEventListener('change', (event) => {
        let Color = event.target.value
        CorfitName.innerHTML = Color
        Corfit.src = `assets/recomendados/br-galaxy-fit3-${Color}.avif`
    });
});