Prerequisites: Install git tool https://desktop.github.com/
Install Docker software on your machine https://www.docker.com/community-edition

steps to run the project:

clone the repository
In Terminal, From project root folder,run below docker commands:
a) docker build -t node-app .
b) docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 3001:3001 --rm node-app
Open your browser to http://localhost:3001/ and you should see the app
