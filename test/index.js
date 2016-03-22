/**
 * Created by dominikriedel on 22.03.16.
 */

var should = require('chai').should(),
    afpushservice = require('../index.js'),
    sendPushNotification = afpushservice.sendPushNotification;

describe('#sendPushNotification', function() {

    it('send push notification via TestApp;', function() {
        sendPushNotification("f133ae3680ce75b62cedb51d34f436e6", "").should.equal(true);
    });

});