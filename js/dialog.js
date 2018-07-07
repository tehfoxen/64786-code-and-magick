'use strict';
(function () {

  var setupPopup = document.querySelector('.setup');
  var popupHadler = document.querySelector('.upload');

  popupHadler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var mousemoveHadler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;


      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupPopup.style.top = (setupPopup.offsetTop - shift.y) + 'px';
      setupPopup.style.left = (setupPopup.offsetLeft - shift.x) + 'px';
    };

    var mouseupHadler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mousemoveHadler);
      document.removeEventListener('mouseup', mouseupHadler);

      if (dragged) {
        var popupHadlerClickHadler = function (clickEvt) {
          clickEvt.preventDefault();
          popupHadler.removeEventListener('click', popupHadlerClickHadler);
        };
        popupHadler.addEventListener('click', popupHadlerClickHadler);
      }
    };

    document.addEventListener('mousemove', mousemoveHadler);
    document.addEventListener('mouseup', mouseupHadler);
  });

})();
