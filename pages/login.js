import * as utilities from "../utilities/akun.json";

class Tokopedia{
    constructor(page) {
        this.page = page;
        this.url = utilities.url;
        this.buttonLogin = "//*[@id='header-main-wrapper']/div[2]/div[2]/div/div/div/div/input";
        // this.buttonAkunLain = "//a[normalize-space()='Masuk ke Akun Lain']";
        this.TextFieldNomor = "//*[@id='email-phone']";
        this.ProductTest = "//*[@id='zeus-root']/div/div[2]/div/div[2]/div[3]/div[2]/div[1]"
    }

    async ProductTokoPedia() {
        await this.page.goto(this.url);
        await this.page.fill(this.buttonLogin, utilities.Handphone, { timeout: 60000 });
        await this.page.press(this.buttonLogin, 'Enter', { timeout: 60000 });
        // Tunggu sampai elemen NameProduct muncul
        await this.page.waitForSelector(this.ProductTest, { timeout: 60000 });
        // Ambil screenshot elemen NameProduct
        await this.page.locator(this.ProductTest).screenshot({ path: 'NamaProduct.png' });
    }
}

module.exports = {Tokopedia};