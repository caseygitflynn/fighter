"use strict";

var Fighter = Fighter || {};

(function () {
  var AssetLoader = function () {
    this.images = {};
  };

  AssetLoader.prototype.loadImage = function (path, name, callback) {
    var image = new Image();
    var self = this;
    image.addEventListener('load', function () {
      self.images[name] = image;
      callback(image);
    });
    image.src = path;
  };

  AssetLoader.prototype.image = function (name) {
    var image = this.images[name];

    if (!image) {
      throw new Error('Image ' + name + ' not found!');
    }

    return image;
  };

  // Export
  Fighter.Assets = new AssetLoader();
}());

