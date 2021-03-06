/*global countlyCommon, countlyGlobal, jQuery*/

(function(countlySystemLogs, $) {

    //Private Properties
    var _data = {};

    //Public Methods
    countlySystemLogs.initialize = function() {
        return $.ajax({
            type: "GET",
            url: countlyCommon.API_PARTS.data.r,
            data: {
                "api_key": countlyGlobal.member.api_key,
                "app_id": countlyCommon.ACTIVE_APP_ID,
                "method": "systemlogs_meta"
            },
            success: function(json) {
                _data = json;
            }
        });
    };

    countlySystemLogs.getMetaData = function() {
        return _data;
    };

}(window.countlySystemLogs = window.countlySystemLogs || {}, jQuery));