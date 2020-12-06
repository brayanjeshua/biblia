const puppeteer = require('puppeteer');

(async () => {
    // Code

    console.log('Abriendo Navegador')
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage()

    await page.goto('https://wol.jw.org/es/wol/l/r4/lp-s?q=rom+8%3A28')

    var traerDatos = await page.evaluate(() => {
        const textwithA = document.querySelector('.resultItems .scalableui p span')
        console.log(textwithA)

        return textwithA.innerHTML
    })

    console.log(traerDatos)




    console.log('Cerrar Navegador')

    browser.close()
    console.log('Navegador Cerrado')
    


})();