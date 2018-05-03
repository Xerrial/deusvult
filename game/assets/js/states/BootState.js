var Deusvult = Deusvult || {};

Deusvult.BootState = function () {
    "use strict";
    Phaser.State.call(this);
};

Deusvult.BootState.prototype = Object.create(Phaser.State.prototype);
Deusvult.BootState.prototype.constructor = Deusvult.BootState;

Deusvult.BootState.prototype.init = function (level_file, next_state) {
    "use strict";
    this.level_file = level_data = JSON.parse("");
    this.next_state = next_state;
};

Deusvult.BootState.prototype.preload = function () {
    "use strict";
    this.load.text("level1", this.level_file);
};

Deusvult.BootState.prototype.create = function () {
    "use strict";
    var level_text, level_data;
    level_text = this.game.cache.getText("level1");
    level_data = JSON.parse(level_text);
    //this.game.state.start("LoadingState", true, false, level_data, this.next_state);
};