AFPushNotificationServiceSDK-nodeJS
=========

A small library providing utility methods to send iOS and Android Push Notifications via the appfarms push notification service.

## Installation

  npm install AFPushNotificationServiceSDK-nodeJS --save

## Usage

var test = new AFPushService()
test.on("success", (result) => {
    console.log(result.statusCode);
    console.log(result.toJSON());
});

test.on("error", (error) => {
    console.log("error: "+error);
});
test.sendPushNotification("09f3eb8e44e0a6b65ca4d43f139a8d36", "Noch ein Test", "Neue Nachricht", {}, null);

## Contributing


## Release History

* 0.1.0 Initial release