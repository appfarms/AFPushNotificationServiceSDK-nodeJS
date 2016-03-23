AFPushNotificationServiceSDK-nodeJS
=========

[![npm package](https://nodei.co/npm/afpushnotificationservicesdk-nodejs.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/afpushnotificationservicesdk-nodejs)

A small library providing utility methods to send iOS and Android Push Notifications via the appfarms push notification service (http://push.appfarms.com).

## Prerequirements
You need to create an REST API Key from the appfarms push notification service (http://push.appfarms.com). If you do not have yet, you will
need to create a new Account on this website and subsribe to the service plan of the appfarms push notification service.

## Installation

  npm install afpushnotificationservicesdk-nodejs --save

## Usage
```javascript
var afpushservice = new AFPushService()
afpushservice.on("success", (result) => {
    console.log(result.statusCode);
    console.log(result.toJSON());
});

afpushservice.on("error", (error) => {
    console.log("error: "+error);
});
afpushservice.sendPushNotification("09f3eb8e44e0a6b65ca4d43f139a8d36", "Noch ein Test", "Neue Nachricht", {}, null);
```

#sendPushNotification

Parameter:
$1 -> APIKey
$2 -> title of push notification
$3 -> message of push notification
$4 -> custom payload
$5 -> filter as array

#Filter



## Release History

* 0.1.0 Initial release