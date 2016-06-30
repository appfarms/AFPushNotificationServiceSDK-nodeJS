/*!
 * afpushservice :: nodejs sdk
 * Copyright (c) 2016 appfarms GmbH & Co. KG <info@appfarms.com>
 * MIT Licensed
 */
"use strict"

var request = require('request');
const EventEmitter = require('events');
const util = require('util');

class AFPushService extends EventEmitter
{
    constructor () {
        super();
        EventEmitter.call(this);
    }

    /**
     * Method to send a push notification with given filter to appfarms push notification service
     *
     * @param apiKey - apiKey of the app you want to send the notification to
     * @param title - message title (only Android and iOS Notification Center)
     * @param message - notification message
     * @param payload - custom payload
     * @param filter - custom filter
     */
    sendPushNotification (apiKey, title, message, payload, filter) {

        // check if apiKey is string
        if (typeof apiKey != "string" || apiKey.length <= 0)
        {
            this.emit("error", new Error("No valid API Key given :'"+ apiKey +"'"));
        }

        // check if title is string
        if (title != null && (typeof title != "string" || title.length <= 0))
        {
            this.emit("error", new Error("No valid title given :'"+ title +"'"));
        }

        // check if message is string
        if (typeof message != "string" || message.length <= 0)
        {
            this.emit("error", new Error("No valid message given :'"+ message +"'"));
        }

        // check if payload is object
        if (payload != null && typeof payload != "object")
        {
            this.emit("error", new Error("No valid payload given :'"+ payload +"'"));
        }

        // check if filter is object
        if (filter != null && typeof filter != "object" && typeof filter != "array")
        {
            this.emit("error", new Error("No valid filter given :'"+ filter +"'"));
        }

        var requestData = {
            "restKey": apiKey,
            "body": message
        };

        if (title != null)
        {
            requestData.title = title
        }

        if (payload != null)
        {
            requestData.payload = payload;
        }

        if (filter != null)
        {
            requestData.matchFilters = 1;
            requestData.filters = (typeof filter != "object") ? [filter] : filter;
        }
        request({
                method: "POST",
                url : 'https://push.appfarms.com/api/notifications',
                json : requestData
            })
            .on('response', (response) => {
                this.emit('success', response);
            })
            .on('error', (err) => {

                this.emit('error', err);
            });
    }
}

module.exports =  AFPushService;