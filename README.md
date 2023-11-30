# webcrawlerhttp
http tutorial project #1

the step :
1) creating .nvmrc file
  this file is supposed to specified the version of node that we will be using
2) type 'nvm install'
  this suppose to install node that is specified in the .nvmrc file (didn't work for me, instead i manually type 'install nvm 18.7.0)
3) type 'nvm use'
  again, this supposed to use the version of node specified in the .nvmrc but it didn't work for me , need to manually type nvm use 18.7.0
4) create the main.js file
  we can run it by typing 'node main.js' in the terminal
5) type npm init
  we can run node manually in the command line like 'node filename' , be because we will be installing test suite and packages, we will be using npm to manage all of that kind of environment and ecosystem. 
  In order to do that, we type in the terminal 'npm init' and then just enter everything. After enter everything 'package.json' file will appear
6) in the 'package.json' file , we add "start" : "node main.js"
  so now instead of typing 'node main.js' in the terminal, we type 'npm start'
  The purpose of doing this is that now we are using a package.json file, so when we want to pull in dependencies and run our code through npm, the dependencies will be available to our code
  The purpose of doing this becuase now, we are using a package.json file, so when we want to pull in dependencies and run our code through npm ('npm start'), the dependencies will be available to our code
7) install jest by typing 'npm install --save-dev jest' in the terminal
  we are going to be doing test driven development as we built out this project, in order to do so, we need a test suite, which is why we install jest.
  jest is a fairly popular testing runtime
  by installing jest by typing 'npm install --save-dev jest' , it will update our 'package.json' file with a new devDependency as well as install the code in the 'node_modules' folder and create package-lock.json 
  (  "devDependencies": {
    "jest": "^29.7.0"
  })
8) create .getignore file and type the node_modules
  because we don't want the node_modules to be in our git respository, we only want our own code.   
  When other person trying to run the code , they only need to type 'npm install' to install all the dependency

9) in the package.json file change the value of "test" (which is under "scripts") from echo "\"Error: no test specified\" && exit 1" to    "jest"
  now we have dependency, we want to add a script that actually runs it, so we do that.
  before we change it, if we type 'npm test', we will get "Error: no test specified", now if we try to type 'npm test' , we are properly calling jest now

10) commit to git
  1) type 'git add .'
    this add every file in the foler to the git staging area
  2) type 'git commit -m "whatever message this is"'
  3) type 'git push origin main'





  




