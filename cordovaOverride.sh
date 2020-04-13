#!/bin/bash
set -o errexit #exit with error code if something goes wrong.
if [ -z ${CI_APP_NAME} ]; then
echo "Not in Appflow skipping cordova hack";
else
echo "In Appflow...using cordova@8.1.2"
npm uninstall -g @ionic-enterprise/cordova
npm install -g cordova@8.1.2
echo "In Appflow...using cordova-ios"
npm i cordova-ios@latest
#npm i cordova-ios@6.0.0-nightly.2020.4.11.449b9ccd
fi