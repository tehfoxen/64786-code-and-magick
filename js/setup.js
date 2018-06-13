
'use strict';
var NUMBER_OF_WIZARD = 4;
// создаем массивы
var WIZARD_NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_LASTNAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'

];
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYE_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
// Находим и удаляем класс hidden у блока
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderRandomNum = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

// массив волшебников
var createWizards = function (count) {
  var wizard = [];

  for (var i = 0; i < count; i++) {

    var wizardExample = {
      name: WIZARD_NAME[renderRandomNum(0, WIZARD_NAME.length - 1)] + ' ' + WIZARD_LASTNAME[renderRandomNum(0, WIZARD_LASTNAME.length - 1)],
      coatColor: COAT_COLOR[renderRandomNum(0, COAT_COLOR.length - 1)],
      eyesColor: EYE_COLOR[renderRandomNum(0, EYE_COLOR.length - 1)]
    };

    wizard.push(wizardExample);
  }

  return wizard;
};
var renderWizard = function (wizardExample) {
  var wizardElement = similarWizardTemplate.cloneNode(true); // копируем данные

  wizardElement.querySelector('.setup-similar-label').textContent = wizardExample.name; // меняем имя волшебника
  wizardElement.querySelector('.wizard-coat').style.fill = wizardExample.coatColor; // меняем цвет плаща
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardExample.eyesColor; // меняем цвет глаз

  return wizardElement; // возвращаем измененного волшебника
};
// вставляем данные
var insertElements = function (parentNode) {
  var fragment = document.createDocumentFragment();
  var wizards = createWizards(NUMBER_OF_WIZARD);
  wizards.forEach(function (wizard) {
    fragment.appendChild(renderWizard(wizard));
  });
  parentNode.appendChild(fragment);
};
insertElements(similarListElement);
// удаляем класс hidden у блока setup-similar
userDialog.querySelector('.setup-similar').classList.remove('hidden');
