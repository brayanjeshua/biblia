const puppeteer = require('puppeteer');
const xss = require('xss');

(async () => {
    // Code

    console.log('Abriendo Navegador')
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage()

    let libro = 'sal';
    let capitulo = 46;
    let versiculo= 1;

    const URL = `https://wol.jw.org/es/wol/l/r4/lp-s?q=${libro}+${capitulo}%3A${versiculo}`;
    console.log(URL)

    await page.goto(URL)

    var traerDatos = await page.evaluate(() => {

        const textwithA = document.querySelector('.resultItems .scalableui div')
        console.log(textwithA)

        return textwithA.innerHTML
    })

    console.log(traerDatos)


    // console.log('Cerrar Navegador')
    browser.close()
    // console.log('Navegador Cerrado')
    


})();