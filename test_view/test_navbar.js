import puppeteer from "puppeteer";

(async () => {
    //Khởi tạo trình duyệt và trang mới
    const browser = await puppeteer.launch({headless:'new'});
    const page = await browser.newPage();

    // Điều hướng đến trang web cần kiểm tra
    await page.goto('https://webmail.onemail.vn/login');
    await page.type('.login__input[autocomplete="username"]', 'demo@onemail.vn');
    await page.type('.login__input[autocomplete="current-password"]', 'iNET@#2020');


    // Kiểm tra xem có phần tử navbar có tồn tại hay không
    await page.click('.btn.btn-primary[type="submit"]');


    // await browser.close();
})();
