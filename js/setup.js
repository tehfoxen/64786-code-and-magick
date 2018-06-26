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
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
// одеть надежду
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var wizardSetup = setup.querySelector('.setup-wizard');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
var fireball = setup.querySelector('.setup-fireball-wrap');
var fireballInput = setup.querySelector('input[name="fireball-color"]');
var userDialog = document.querySelector('.setup');


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

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    onPopupClose();
  }
};

var onPopupOpen = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var onPopupClose = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  onPopupOpen();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    onPopupOpen();
  }
});
setupClose.addEventListener('click', function () {
  onPopupClose();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    onPopupOpen();
  }
});
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    onPopupClose();
  }
});


userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});


wizardCoat.addEventListener('click', function () {
  var color = COATS_COLORS[getRandomIntegerFromInterval(0, COATS_COLORS.length - 1)];
  wizardCoat.style.fill = color;
  wizardCoatInput.value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = EYES_COLORS[getRandomIntegerFromInterval(0, EYES_COLORS.length - 1)];
  wizardEyes.style.fill = color;
  wizardEyesInput.value = color;
});

fireball.addEventListener('click', function () {
  var color = FIREBALL_COLORS[getRandomIntegerFromInterval(0, EYES_COLORS.length - 1)];
  fireball.style.background = color;
  fireballInput.value = color;
});
