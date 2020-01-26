# Female Daily Assessment

![alt text](https://femaledaily.com/static/images/logo_FD.png "Logo Title Text 1")

Single webpage frontend developer using NuxtJS Server side rendering. 

## Tech Stack
* [NuxtJs - Javascript Framework](https://nuxtjs.org/)
* [Vuetify - CSS Framework](https://vuetifyjs.com/en/getting-started/quick-start)
* [SCSS - SCSS Preprocessor](https://sass-lang.com/documentation/syntax)
* [Axios - Http Request](https://axios.nuxtjs.org/)

## Run on localhost
```bash

# Clone this project 
https://github.com/rendisimamora/female-daily.git

# Install depedencies
yarn

# Create .env on root projects 
BASE_URL=https://virtserver.swaggerhub.com/hqms/
PRIMARY=#db284e
ACCENT=#4a4a4a
SECONDARY=#9b9b9b
INFO=#d8d8d8

Or you can see on .env.example

# Run Project
yarn dev

```

## Run on Servers
Before you proceed make sure you have the following installed:
* [NODEJS - Server-side JavaScript environment.](https://nodejs.org/en/download/)
* [NPM / YARN - Package Manager](https://legacy.yarnpkg.com/lang/en/docs/install/#mac-stable)
* [GIT - Version Control](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [HTTP Request - Nginx](https://nuxtjs.org/faq/nginx-proxy/)
* [PM2 - Daemon process manager](https://pm2.keymetrics.io/)

To get started start by running this command to clone repository 
```bash
https://github.com/rendisimamora/female-daily.git
```
Then install the dependancies
```bash
cd <project-name>
npm install / yarn
```

### Building  The Application
We need to build  our application which will  bundle all the application assets and later we can run the application.

Run the following commands to build and start our application on port 3000 which is the default port that nuxt runs on.
```bash
npm run build
npm run start
 or using yarn
yarn run build
yarn run start
```
if you visit [http://localhost:3000](http://localhost:3000) you should see your application running
Now that we have our application ready its time to start our deployment process

Pm2 is a production process manager that helps us to keep our app alive at all times.it also restart the application during boot time  offloading us the task of  restarting our application every time we power on our computer.

### Using Pm2 To Run Our Vue (Nuxt) App
Start our vue app with pm2.

```bash
pm2 start npm --name "your-app-alias" -- start
```

