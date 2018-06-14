'use strict';
var NUMBERS_OF_WIZARDS = 4;

var WIZARDS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARDS_LASTNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COATS_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomIntegerFromInterval = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

var createWizards = function (count) {
  var wizard = [];
  for (var i = 0; i < count; i++) {
    var wizardExample = {
      name: WIZARDS_NAMES[getRandomIntegerFromInterval(0, WIZARDS_NAMES.length - 1)] + ' ' + WIZARDS_LASTNAMES[getRandomIntegerFromInterval(0, WIZARDS_LASTNAMES.length - 1)],
      coatColor: COATS_COLORS[getRandomIntegerFromInterval(0, COATS_COLORS.length - 1)],
      eyesColor: EYES_COLORS[getRandomIntegerFromInterval(0, EYES_COLORS.length - 1)]
    };
    wizard.push(wizardExample);
  }
  return wizard;
};
var renderWizard = function (wizardExample) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardExample.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardExample.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardExample.eyesColor;
  return wizardElement;
};
var insertElements = function (parentNode) {
  var fragment = document.createDocumentFragment();
  var wizards = createWizards(NUMBERS_OF_WIZARDS);
  wizards.forEach(function (wizard) {
    fragment.appendChild(renderWizard(wizard));
  });
  parentNode.appendChild(fragment);
};

insertElements(similarListElement);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
