const faker = require('faker');
Feature('donasi kitabisa');

Scenario('Donasi', ({ I }) => {
I.amOnPage(process.env.URL);
I.scrollTo('.style__Line-sc-1jruwcp-0.jWvZJh');
I.click('.style__LargeListFigure-sc-__sc-kwu31b-1.fZfZNs');
I.click('Donasi sekarang!');
// melakukan input nominal donasi
I.fillField('#contribute_inputfield_amount-donation','10000');
I.click('#contribute_button_lanjutkan-pembayaran');
// melakukan pilih channel pembayaran
I.scrollPageToBottom();
I.click('//*[@id="__next"]/main/main/div[6]/div[4]');
// input informasi donasi
I.see('Sekujur Tubuh Wetno Terbakar Saat Jualan Sate!');
I.fillField('Nama Lengkap',faker.name.findName());
I.fillField('Nomor Ponsel atau Email',faker.internet.email());
I.fillField('#contribute-textarea-dua','SEMOGA LEKAS PULIH KEMBALI');
I.click('#contribute_button_lanjutkan-pembayaran');
// masuk di halaman tagihan donasi
I.see('Instruksi Pembayaran');
I.click('Donasi ke penggalangan lain');
// //kembali kehalaman penggalangan
I.see('.home-page');
});
