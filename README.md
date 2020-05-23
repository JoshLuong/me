
# Tools
* create-react-app cli
* React MDL material design
* React Router v4
* Slideshow
* React Reveal
* https://kaboompics.com/photo/8482/tropical-botanical-garden-in-belem-lisbon-portugal

# Start App
npm install
npm start

if make changes, save local, then run npm run deploy
inspiration from Paul Hanna

change www... to githubs page
troubles with routing:
1.) added to netlify to host
2.) change https://github.com/facebook/create-react-app/issues/1765
  build script

to deploy to gh-pages, change the package.json back to include homepage,
then run npm run deploy

to make change to netlify, make change, then git add . , git commit -m "..", git push origin master
then deploy on netlify (auto deploys)

to change domain, need to change DSN on GoDaddy 
```
