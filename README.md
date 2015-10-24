# cs651assignments-neha

This is part 2 of Assignment 4 (Aurelia App).

Steps to get the app up and running

# Install Gulp globally 
npm install -g gulp
 
#Install jspm. the client-side package manager
npm install -g jspm
 
#cd into project folder and run (this would set up project structure)
npm install -g yo generator-aurelia
yo aurelia
 
#Install packages
npm install
npm install jspm jspm --save-dev
jspm init
jspm install github:aurelia/bootstrapper@0.18.0
jspm install github:systemjs/plugin-text@0.18.0
 
#Serve the app
gulp watch