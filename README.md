<div align=center>

# Power Plant

#### JavaScript Basic Functional Programming Exercise for [Epicodus](https://www.epicodus.com/), 04.14.2020

#### By **Adela Darmansyah and Krista Rutz**

[About](#About) | [Specs](#Specs) | [Installation](#Installation-Instructions) | [Bugs](#Known-Bugs) | [Technologies](#Technologies-Used) | [Contact](#Support-and-Contact-Details)

![GitHub](https://img.shields.io/github/license/ayohana/power-plant?color=%23DE98B2&style=for-the-badge) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/ayohana/power-plant/master?color=%23DE98B2&style=for-the-badge) ![GitHub language count](https://img.shields.io/github/languages/count/ayohana/power-plant?color=%23DE98B2&style=for-the-badge)

</div>

## About

This JavaScript CLI and GUI application is a Test Driven Development exercise and a practice for writing closures and recursive functions.

## Specs

<details>
  <summary>Click to expand!</summary>

| Spec | Input | Output |
| :--- | :---- | :------ |
| **Program creates a plant object** | new plant | plant = { soil:0, water:0, light:0 } |
| **Program allows users to feed a plant** | feed(plant) | plant = { soil:5, water:0, light:0 } |
| **Program allows users to hydrate a plant** | hydrate(plant) | plant = { soil:0, water:5, light:0 } |
| **Program allows users to give light to a plant** | giveLight(plant) | plant = { soil:0, water:0, light:5 } |
| **Program accumulates status points of a plant** | feed(plant), giveLight(plant) | plant = { soil:5, water:0, light:5 } |
| **Program allows users to create multiple plants** | new plantOne, new plantTwo | `Objects:` plantOne, plantTwo |

</details>

## Installation Instructions

* Clone this [repository](https://github.com/ayohana/power-plant.git/)
* Open the command line and navigate into the repository.
* Use the command `npm install` to install all necessary plugins.
* To test all TDD specs, use the command `npm test`.

## Known Bugs

No known bugs at this time.

## Technologies Used

<!-- * HTML
* CSS
* Bootstrap -->
* JavaScript
* Markdown
* npm
  * Webpack
  * Jest
  * Code Linter
  * _etc.*_

_*Open `package.json` file to see the complete list of all plugins._

## Support and Contact Details

Feel free to provide feedback via email: adela.yohana@gmail.com or rutzkri000@gmail.com.

### License

This application is licensed under the MIT license.

Copyright (c) 2020 **Adela Darmansyah and Krista Rutz**