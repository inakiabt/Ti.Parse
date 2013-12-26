// global libraries that are expected to exists
_ = require('lib/underscore');
// Backbone = require('lib/stackmob4/backbone');

// this is where we just extend the StackMob module to meet the needs of
// Appcelerator
localStorage = {
            // Since the underlying client side storage implementation may not be
            // name-spaced, we'll prefix our saved keys with `STORAGE_PREFIX`.
            STORAGE_PREFIX : 'parse.',

            //Use this to save things to local storage as a key/value pair.
            setItem : function(key, value) {
                // If there's an HTML5 implementation of Local Storage available, then use it.
                // Otherwise, there's no fallback at this point in time.
                Ti.App.Properties.setString(this.STORAGE_PREFIX + key, value);
            },
            //Read a value from local storage given the `key`.
            getItem : function(key) {
                return Ti.App.Properties.getString(this.STORAGE_PREFIX + key);
            },
            //Remove a value from local storage given the `key`.
            removeItem : function(key) {
                Ti.App.Properties.removeProperty(this.STORAGE_PREFIX + key);
            }
        };
XMLHttpRequest = function(){
    return Ti.Network.createHTTPClient();
};

    // need to convert this to requires

require('lib/parse-sdk');
