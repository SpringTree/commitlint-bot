// Google Cloud functions handler for thie probot
//
// Probot: https://probot.github.io/docs/
// serverless-gcf: https://github.com/probot/serverless-gcf#usage
//
// You need to setup a .env.yaml file with the variables:
// * APP_ID
// * WEBHOOK_SECRET
// * PRIVATE_KEY
//
// These secrets can be found in our password vault and never be in git
//
// Deploy with command:
// gcloud functions deploy commitlint --env-vars-file .env.yaml
//
const { serverless } = require('@probot/serverless-gcf')
const appFn = require('./')
module.exports.commitlint = serverless(appFn)