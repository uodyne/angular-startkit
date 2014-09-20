# angular-startkit — AngularJS StartKit

AngularJS
+ angular-resource
+ angular-route
+ angular-animate
+ angular-route-segment
+ angular-bootstrap
+ google-code-prettify
+ bootstrap (for css only)

NodeJS
+ Express

## URL
http://darkant.com/angular-startkit/


## Running Locally
Make sure you have [Node.js](http://nodejs.org/) 

And Bower. If not:
```sh
sudo npm install bower -g
```

### Installation

```sh
git clone git@github.com:uodyne/angular-startkit.git myApp
cd myApp
npm install & bower install
```
### Run

```sh
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Heroku deploy

Make sure you have [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using this experimental
web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


You can also take an existing Git repo and add a remote using the git URL provided when you created your app:

```sh
heroku git:remote -a ***name-app-heroku***
```

Remove back

```sh
git remote rm heroku
```

Info remote

```sh
git remote -v
```

Forze push 

```sh
git push -f heroku master
```
