AFPushNotificationServiceSDK-nodeJS
=========

[![npm package](https://nodei.co/npm/afpushnotificationservicesdk-nodejs.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/afpushnotificationservicesdk-nodejs)

A small library providing utility methods to send iOS and Android Push Notifications via the appfarms push notification service (http://push.appfarms.com). In current version you can provide an array of filters to select destination devices. We are working on a version where you can push to a given device token.

# Prerequirements
You need to create an REST API Key from the appfarms push notification service (http://push.appfarms.com). If you do not have yet, you will
need to create a new Account on this website and subsribe to the service plan of the appfarms push notification service.

# Installation

  npm install afpushnotificationservicesdk-nodejs --save

# Usage
```javascript
var afpushservice = new AFPushService()
afpushservice.on("success", (result) => {
    console.log(result.statusCode);
    console.log(result.toJSON());
});

afpushservice.on("error", (error) => {
    console.log("error: "+error);
});
var apiKey = "09f3eb8e44e0a6b65ca4d43f139a8d36";
afpushservice.sendPushNotification(apiKey, null, "Neue Nachricht", null, null);
```

### sendPushNotification
__Parameter:__
+ $1 -> APIKey
+ $2 -> title of push notification (optional)
+ $3 -> message of push notification
+ $4 -> custom payload as array (optional)
+ $5 -> filter as array (optional)

### Filter
```js
[
  {
    „key“: id of app key,
    „operator“: 1 for >, 2 for <, 3 for >=, 4 for <=, 5 for ==, 6 for !=, 7 for between, 8 for like,
    „op2“: „value“,
    „op3“: „only for between (operator 7)“
  },
  ...
]
```
Example (will send a notification to everyone who has app version = 2.0":
```js
[
  {
    „key“: 26, // 26 for APP_VERSION_NAME
    „operator“: 5,
    „op2“: „2.0“
  }
]
```

### Payload

```js
[
  {
    „key“: key of an payload object
    „value“: "value" 
  },
  ...
]
```
Example:
```js
[
  {
    „key“: "article_id", // 26 for APP_VERSION_NAME
    „value“: 5
  },
  {
    „key“: "more_information", // 26 for APP_VERSION_NAME
    „value“: {
      "test" : "test"
    }
  }
]
```

# License

This module is licensed under the MIT license.

# Release History

* 0.1.3 Initial release