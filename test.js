import { Ecommerce } from './src/Ecommerce.js';
import { Airtime } from './src/Airtime.js';
import { Bill } from './src/Bill.js';
import { Money } from './src/Money.js';
import { Account } from './src/Account.js';


/****************ecommerce api examples***********/

// let ecommerce = new Ecommerce(
//     'AFC6617',
//     '661671d0bd7bef499e7d80879c27d95e',
//     '7777',
//     'http://34.86.5.170:8086/api/ecommerce/collect/',
//     'http://34.86.5.170:8086/api/ecommerce/payout/',
//     'http://34.86.5.170:8086/api/ecommerce/deposit/',
//     'http://34.86.5.170:8086/api/ecommerce/changekey/',
//     'http://34.86.5.170:8086/api/ecommerce/transaction/status/'
// );

// ecommerce.collect(
//     'mtn_mobilemoney_cm',
//     '677777777',
//     350).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.log(error);
//     });

// ecommerce.collect(
//     'orange_money_cm',
//     '699999999',
//     400,
//     '0000',
//     'wdl125').then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.log(error);
//     });


// ecommerce.deposit()
//     .then(function (response) {
//             console.log(response.data);
//         }).catch(function (error) {
//             console.log(error);
//         });

// ecommerce.payout(
//     'mtn_mobilemoney_cm',
//     '677777777',
//     350).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.log(error);
//     });

/****************account api examples***********/
let account = new Account(
    '3620724907638658',
    '3620724907638658',
    'e825e83873eafffff315fc3f22db2d59',
    'http://34.86.5.170:8086/api/account/agent/balance/v2/',
    'http://34.86.5.170:8086/api/account/agent/balance/v2/',
    'http://34.86.5.170:8086/api/account/developer/changekey/'
);

account.balance()
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });

/****************bill api examples***********/

// let bill = new Bill(
//     '3620724907638658',
//     '3620724907638658',
//     'e825e83873eafffff315fc3f22db2d59',
//     'afrikpay',
//     'http://34.86.5.170:8086/api/bill/v2/',
//     'http://34.86.5.170:8086/api/bill/getamount/',
//     'http://34.86.5.170:8086/api/bill/status/v2/'
// );

// bill.payBill(
//     'camwater',
//     '111111111111111',
//     2500,
//     'cash',
//     '321koi'
// ).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.log(error);
// });

// bill.payBill(
//     'canal',
//     '11111111111111',
//     13500,
//     'cash',
//     '321bgh'
// ).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.log(error);
// });

// bill.getBillAmount(
//     'camwater',
//     '111111111111111'
// ).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.log(error);
// });

// bill.getBillStatus(
//     '321bgh'
// ).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.log(error);
// });

/****************airtime api examples***********/
// let airtime = new Airtime(
//     '3620724907638658',
//     '3620724907638658',
//     'e825e83873eafffff315fc3f22db2d59',
//     'afrikpay',
//     'http://34.86.5.170:8086/api/airtime/v2/',
//     'http://34.86.5.170:8086/api/airtime/status/v2/'
// );

// airtime.makeAirtime(
//     'mtn',
//     '677777777',
//     1000,
//     'cash',
//     'zerty145'
// ).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.log(error);
// });

// airtime.airtimeStatus(
//     'zerty145'
// ).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.log(error);
// });