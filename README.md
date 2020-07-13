# sauce-demo-JS-UI-test

This project is an exercise to practice the skills learned in the Javascript Study Group.
With this project we will test the main aspects of the sauce demo web site, available in:

https://www.saucedemo.com/

For these tasks we are going to use webdriverIO, Mocha and Chai.

In order to run this project:
1) Install npm
2) Intall node: brew install node
3) Initialize npm project: npm init -y  
The -y will answer 'yes' to all the prompts, giving you a standard NPM project.
4) Install wdio cli: npm i --save-dev @wdio/cli
5) Create a configuration file: npx wdio config -y
6) Execute the project: npx wdio wdio.conf.js

If you want to create new test cases feel free to add js test files in the ./test/specs folder.
