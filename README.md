# _Pizza Parlor_

#### _A web based pizza menu that allows you to order a meal and calculate it's cost, current as of Jan 29th, 2021._

#### By _**Taylor Baker**_

<img src="img/pizza-parlor.jpg" style="max-width:360px; display: block; width: 75%; margin-left: auto; margin-right: auto; ">

## Description

_A web based pizza menu that allows your to order a pizza and calculate it's cost. Cost takes into account size and number of toppings._

## Setup/Installation Instructions

_There are two ways to view this project:_

### Visual Studio Setup Instructions

_First you'll need to download and install visual studio code onto your workstation._

1. Visit the [VS Code website](https://code.visualstudio.com/) and download the latest version of VS code.

2. Click on the downloaded file in your browser and go through the installation instructions. Simply click "next" and "continue" through the instructions until the installation is complete.

3. Clone this repository from GitHub using this [link](https://github.com/Taylor-Baker/Pizza-Parlor.git).

4. Open the files in VS Code and view the page in the default web browser. Or, once the cloned repository is on your machine, locate the files and double click on index.html to open in the default web browser.

_Note: If you do not know how to clone down a repository, instructions on how to do so can easily be found online._

### View on gh-pages

_Viewing in gh-pages is much easier. Simply click on the link below to preview the project in it's entirety:_

* _https://Taylor-Baker.github.io/Pizza-Parlor_

## Known Bugs

_There are no known bugs at this time. If you find an issue and would like to report it, please contact the developer via the information provided below._

## Contact Us

_For any questions, comments, or to report a bug, please contact the developer at:_

* _<taylorbaker.coding@gmail.com>_

## Technologies/Liscensing

### Languages

* _HTML_
* _CSS_
* _JavaScript_

### Libraries

* _Bootstrap_
* _jQuery_

### Tools

* _GitBash_
* _Visual Studio Code_
* _Google Chrome_

## Specs
```
Describe: Pizza()

Test 1: 'It will create an instance of a Pizza object'
Expect(Pizza(7, 2)).toEqual(Pizza {this.sizeCost = 7; this.toppingsCost = 2;});

Describe: calcPizzaCost()

Test 1: 'It will add the cost of the pizza size with the cost of the pizza toppings, thus calculating the total cost of the pizza order.'
Expect(Pizza(7, 2).calcPizzaCost()).toEqual(9);


```

### License

*This product is licensed under the **MIT** license.*

Copyright (c) 2021 **_Taylor Baker_**