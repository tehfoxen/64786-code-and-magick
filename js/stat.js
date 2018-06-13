'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var GAP = 50;
var BAR_WIDTH = 40;
var VERTICAL_GAP = 20;
var TEXT_HEIGHT = 10;
var USER_COLUMN_COLOR = 'rgba(255, 0, 0, 1)';
var TEXT_X = CLOUD_X + GAP;
var TEXT_Y = CLOUD_Y + VERTICAL_GAP;
var BAR_MAX_HEIGHT = 150;
var HISTO_LEFT_MARGIN = 45;
var TEXT_AREA_HEIGHT = 95;
var TEXT_LINE_HEIGHT = 20;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandom = function (min, max) {
  return Math.random() * (max - min) + min;
};

var getRandomBlue = function () {
  var h = 245;
  var s = getRandom(0, 100);
  var l = 50;
  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
};

// Выводим окно со статистикой
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + TEXT_HEIGHT + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    // Вычисляем высоты бара в гистограмме
    var BAR_HEIGHT = ((CLOUD_HEIGHT * times[i]) / maxTime) - 100;
    if (players[i] === 'Вы') {
      ctx.fillStyle = USER_COLUMN_COLOR; // Красим в красный
    } else {
      ctx.fillStyle = getRandomBlue(); // Красим в синий
    }
    // Рисуем бар
    ctx.fillRect(CLOUD_X + HISTO_LEFT_MARGIN + (BAR_WIDTH + GAP) * i, (CLOUD_Y + BAR_MAX_HEIGHT - BAR_HEIGHT) + TEXT_AREA_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
    // Выводим имена игроков и очки
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(players[i], CLOUD_X + HISTO_LEFT_MARGIN + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + HISTO_LEFT_MARGIN + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - BAR_HEIGHT - TEXT_LINE_HEIGHT);
  }
};
