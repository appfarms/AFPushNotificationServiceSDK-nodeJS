/**
 * Created by dominikriedel on 22.03.16.
 */
var AFPushService = require('../index.js');

var chai = require('chai'),
    spies = require('chai-spies');

chai.use(spies);

var should = chai.should(),
    expect = chai.expect;

describe('#sendPushNotification', function() {

    it('send push notification via TestApp;', function() {

        var test = new AFPushService();
        var spy = chai.spy(AFPushService.sendPushNotification);
        test.on("error", spy);
        spy.should.have.been.called();


        test.on("error", function(err)
        {
            console.log("error" + err);
        });
        // test.sendPushNotification("f133ae3680ce75b62cedb51d34f436e6");
    });

});