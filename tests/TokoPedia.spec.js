const { test } = require('@playwright/test');
const { Tokopedia } = require('../pages/login');

test('Pilih Product Tokopedia', async ({ page }) => {
    const tokopedia = new Tokopedia(page);
    await tokopedia.ProductTokoPedia();

});

