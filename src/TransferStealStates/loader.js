/* globals YED: false */

/**
 * Pre-processes and notetag parsing
 */
(function($Utils) {
    /**
     * Aliasing methods
     */
    var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;

    /**
     * Extending: Scene_Boot.prototype.start
     *
     * Add notetags processing for module.
     */
    DataManager.isDatabaseLoaded = function() {
        var loaded = _DataManager_isDatabaseLoaded.call(this);

        if (!loaded) {
            return false;
        }

        $Utils.processNotetags.call(DataManager);

        return true;
    };
}(YED.TransferStealStates.Utils));