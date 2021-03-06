## Rapid Evaluation Map

<a href="http://gridmapauth.heroku.com">GridMapper-Node</a> draws a custom grid over a map.
Each grid square is color-coded based on damage reports, allowing you to create, interpret, and inform the public with an online map.

The server can be configured to allow edits from only users who are signed in. These users can also use the Archive button to save the grid and generate a new grid. These archives can later be retrieved from the database.

Browser support is equivalent to Leaflet.js maps (Chrome, Firefox, Internet Explorer 7+, Safari Mobile on iOS)

<img src="http://i.imgur.com/I0GC0.png"/>

## Layers and Data

The background layer can be set to a roadmap (tiles by Stamen) or aerial photos (from Bing)

GeoJSON layers underneath the grid add context ( this example adds city limits and wards ).

blockgrid.js stores statistics for all Census blocks which overlap each grid square.

<img src="http://i.imgur.com/NboEM.png"/>

You can generate this data using these two scripts in QGIS:
<ul>
<li><a href="https://gist.github.com/3594805">Census2Grid.py</a></li>
<li><a href="https://gist.github.com/3595104">BlockInfo.py</a></li>
</ul>

The map also can support multiple grids ( this example separates wind and flood damage grids ).

## Customizing the Grid

In app.js, several variables are defined which customize the map, grid, and webpage

<ul>
  <li>Set maptitle, mapuserpic, and mapusername to customize UI</li>
  <li>Set tilexyz and tilecopyright when changing background map</li>
  <li>Change the starting view of the map with lat, lng, and zoom</li>
  <li>Set up a grid by setting north, south, east, west, columns, and rows</li>
  <li>A guide in app.js explains how to set the shape of each row</li>
</ul>

## About Poang

Poang ([github](https://github.com/BeyondFog/Poang)) is a Node.js/MongoDB app built using the [Express](http://expressjs.com/) framework. Poang uses [Everyauth](http://everyauth.com/) for local authentication, [Mongoose-Auth](https://github.com/bnoguchi/mongoose-auth) to connect Everyauth to MongoDB (and [Mongoose](http://mongoosejs.com/) as the ODM) for account persistence, and [Connect-Mongo](https://github.com/kcbanner/connect-mongo) as a session store. Most of the code in app.js was generated by Express and all of the code in auth.js after the Comment schema is straight from the Mongoose-Auth docs.

For testing, Poang uses the [Mocha](http://visionmedia.github.com/mocha/) test framework, [should](https://github.com/visionmedia/should.js) for assertions, [Sinon.JS](http://sinonjs.org/) for mocks & stubs, and [Zombie.js](http://zombie.labnotes.org/) for lightweight integration testing.

For more details, please see BeyondFog's [blog post](http://blog.beyondfog.com/?p=222) that walks through the various tests in Poang.

## Installation
 
1) Do a git clone:

    git clone git://github.com:codeforamerica/GridMapper-Node.git
    
2) cd into the project directory and then install the necessary node modules:

    npm install -d

3) start up MongoDB if it's not already running:
  
    mongod --noprealloc --nojournal
    
4) start the node process:

    node app.js

## Deploy to Heroku

After you have created a new app on Heroku and pushed the code via git, you will need to use the Heroku Toolbelt from your command line to add the free MongoLab starter addon:

    heroku addons:add mongolab:starter --app [your_app_name]
