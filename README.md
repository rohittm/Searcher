# Searcher
*In Progress* The Search Engine being made using React.js

# Instructions

## Part 1: Search Infrastructure

_Prerequisites: Docker and Docker host._

Clone the repo and in the top level run `docker-compose up`

## Part 2: Indexing

_Prerequisites: nodejs; node canvas - which requries [node-gyp and cairo](https://github.com/Automattic/node-canvas#installation)_

Installing node canvas dependency can be tough So follow this:

'xcode-select --install # this is important 
npm install node-gyp -g
brew install giflib cairo libjpeg giflib pixman
export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig
OTHER_CFLAGS=-I/usr/local/include npm install canvas`

In the indexer directory run `npm install` to set up the dependencies.

Then run `node index.js <path to photos>`

# Part 3: 

Again in the top level, run `npm start` 

This will start the react app in (http://localhost:3000/)

