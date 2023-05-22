import puppeteer from "puppeteer";

(async () => {
    //Khởi tạo trình duyệt và trang mới
    const browser = await puppeteer.launch({headless:'new'});
    const page = await browser.newPage();

    // Điều hướng đến trang web cần kiểm tra
    await page.goto('https://www.example.com');

    // Kiểm tra xem có phần tử navbar có tồn tại hay không
    const navbarExists = await page.evaluate(() => {
        const navbar = document.querySelector('nav');
        return navbar !== null;
    });

    if (navbarExists) {
        console.log('Navbar tồn tại.');
    } else {
        console.log('Navbar không tồn tại.');
    }

    await browser.close();
})();
