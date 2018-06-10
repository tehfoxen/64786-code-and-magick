'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FONT_GAP = 10;
var GAP = 50;
var BAR_WIDTH = 40;
var HISTOGRAMM_MAX_HEIGHT = 150;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

};
// Определяет максимальное значение в массиве
var getMaxElement = function (arr) {
  if (!arr) {
    return arr;
  }
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// Выводим окно со статистикой
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 230, 30);
  ctx.fillText('Список результатов:', 230, 50);

  var maxTime = getMaxElement(times);
  var saturation = Math.random() * 100;
}
