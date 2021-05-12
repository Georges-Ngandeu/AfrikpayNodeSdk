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
    <li><a href="#usage">Usage</a></li>
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
## Usage

Let's suppose you want to integrate ecommerce payments on you system. Here are some steps to to get the job done in the development environment. 
```
import {Ecommerce} from 'afrikpay-node-sdk';

let ecommerce = new Ecommerce(
    'AFC5308',
    'b2b0c952269cd5c38903433759369ac7',
    '',
    'http://34.86.5.170:8086/api/ecommerce/collect/'
 );

ecommerce.collect('mtn_mobilemoney_cm', '677777777', 350)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
```
By default the services are configure for production. For example, in production to make an ecommerce payment, you will write the above code. You can explore the src directory of the package to get the default values.

```
import {Ecommerce} from 'afrikpay-node-sdk';

let ecommerce = new Ecommerce(
    'AFC5308',
    'b2b0c952269cd5c38903433759369ac7'
 );

ecommerce.collect('mtn_mobilemoney_cm', '677777777', 350)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
```

_For more examples, please refer to the [Documentation](https://github.com/Georges-Ngandeu/AfrikpayNodeSdk)_.
You can also explore the src directory of the package to see all the service available for each Afrikpay api product.
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