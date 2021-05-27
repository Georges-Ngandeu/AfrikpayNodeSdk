<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Georges-Ngandeu/AfrikpayNodeSdk">
    <img src="afrikpay.png" alt="Logo" width="100%" height="100%">
  </a>

  <h3 align="center">Afrikpay Node Sdk</h3>

  <p align="center">
    Afrikpay api integration with nodejs
    <br />
    <a href="https://github.com/Georges-Ngandeu/AfrikpayNodeSdk"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Georges-Ngandeu/AfrikpayNodeSdk">View Demo</a>
    ·
    <a href="https://github.com/Georges-Ngandeu/AfrikpayNodeSdk">Report Bug</a>
    ·
    <a href="https://github.com/Georges-Ngandeu/AfrikpayNodeSdk">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#getting">Getting started</a></li>
    <li><a href="#usage">Ecommerce integration</a></li>
    <li><a href="#usage">Bill integration</a></li>
    <li><a href="#usage">Airtime integration</a></li>
    <li><a href="#usage">Account integration</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Getting Started

This node library was created with the purpose of facilitating the integration of our payment api to our partners. It is an ongoing work. Suggestions to ameliorate the api are welcome. 

### Prerequisites

  ```sh
  npm install npm@latest -g
  ```

### Installation

   ```sh
   npm install afrikpay-node-sdk
   ```
<!-- USAGE EXAMPLES -->
## Ecommerce integration

Let's suppose you want to integrate ecommerce payments on you system. Here are the two main steps to get the job done in the development environment.
You an uncomment the code to test the others apis. 
```
import {Ecommerce} from 'afrikpay-node-sdk';

let ecommerce = new Ecommerce(
    'AFC6617',
    '661671d0bd7bef499e7d80879c27d95e',
    '7777',
    'http://34.86.5.170:8086/api/ecommerce/collect/',
    'http://34.86.5.170:8086/api/ecommerce/payout/',
    'http://34.86.5.170:8086/api/ecommerce/deposit/',
    'http://34.86.5.170:8086/api/ecommerce/changekey/',
    'http://34.86.5.170:8086/api/ecommerce/transaction/status/'
);

ecommerce.collect(
    'mtn_mobilemoney_cm',
    '677777777',
    350).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    });

ecommerce.collect(
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
```
## Bill integration
If you want to integrate bill payments apis on you system, here are the two main steps to get the job done in the development environment. You an uncomment the code to test the others apis.

```
import {Bill} from 'afrikpay-node-sdk';

let bill = new Bill(
    '3620724907638658',
    '3620724907638658',
    'e825e83873eafffff315fc3f22db2d59',
    'afrikpay',
    'http://34.86.5.170:8086/api/bill/v2/',
    'http://34.86.5.170:8086/api/bill/getamount/',
    'http://34.86.5.170:8086/api/bill/status/v2/'
);

bill.payBill(
    'camwater',
    '111111111111111',
    2500,
    'cash',
    '321koi'
).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});

bill.payBill(
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
```
## Airtime api integration
If you want to integrate airtime apis on you system, here are the two main steps to get the job done in the development environment. You an uncomment the code to test the others apis.

```
let airtime = new Airtime(
    '3620724907638658',
    '3620724907638658',
    'e825e83873eafffff315fc3f22db2d59',
    'afrikpay',
    'http://34.86.5.170:8086/api/airtime/v2/',
    'http://34.86.5.170:8086/api/airtime/status/v2/'
);

airtime.makeAirtime(
    'mtn',
    '677777777',
    1000,
    'cash',
    'zerty145'
).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});

airtime.airtimeStatus(
//     'zerty145'
// ).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.log(error);
// });
```
## Account api integration
If you want to integrate account apis on you system, here are the two main steps to get the job done in the development environment. You an uncomment the code to test the others apis.
```
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
```
## How to switch to production ?
You can explore the src folder to see the default production setup. Just use the appropriate apikey, store code, agentid for production. If you have any problem using the library please contact us, we will be happy to help you. 
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Project Link: [https://github.com/Georges-Ngandeu/AfrikpayNodeSdk](https://github.com/Georges-Ngandeu/AfrikpayNodeSdk)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()
* []()
* []()

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username