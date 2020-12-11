# biketag-website-server-1
The production server https://biketag.org

Status: `Active`

Info: `Version 1.0.0`

Provider: `Google Compute Engine`

Uptime: `Since May of 2018`

## Deployment instructions

1) Clone the project:

`git clone https://github.com/biketagorg/biketag-infra.git#production--biketag-website-server-1 ~/biketag-website`

2) Run `npm install` in the project folder.

`cd ~/biketag-website && npm install`

NOTE: On `postinstall`, an index.js generator file will be created and run. This will load seXpress for the first time which will pick up the `generate` option in the package.json. The `generate` option instructs seXpress to pull in sources and templates from other seXpress applications, ([biketag-app](https://github.com/biketagorg/biketag-app), [biketag-webiste](https://github.com/biketagorg/biketag-webiste)) respectively, and pulls in the configuration from teh biketag-website project.

3) Spin up the application pool with PM2 using the package scripts

`npm run server-start`

The application should now be running under the name set in the ecosystem file. All server deployments have an associated `private.config.json` file with API keys and other sensitive information. This information can be deployed to servers in different ways, but the app will not fully function without some of these parameters set. (this is intentional)

4) Play BikeTag!
