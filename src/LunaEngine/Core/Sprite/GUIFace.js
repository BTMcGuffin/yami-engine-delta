/* globals LunaEngine: false */

(function() {
    // dependencies
    var GUI = LunaEngine.Core.Sprite.GUI;

    var GUIFace = function() {
        this.initialize.apply(this, arguments);
    };

    GUIFace.prototype = Object.create(GUI.prototype);
    GUIFace.prototype.constructor = GUIFace;

    GUIFace.prototype.initialize = function() {
        GUI.prototype.initialize.call(this);

        this.bitmap = new Bitmap(Window_Base._faceWidth,
            Window_Base._faceHeight);

        this._faceName = "";
        this._faceIndex = 0;
    };

    GUIFace.prototype.drawGUI = function(faceName, faceIndex) {
        this.bitmap.clear();
        this.bitmap.drawFace(faceName, faceIndex, 0, 0);
    };

    LunaEngine.Core.Sprite.GUIFace = GUIFace;
}());