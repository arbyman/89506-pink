var crop = document.querySelector('.photo-edit__crop');
var fill = document.querySelector('.photo-edit__fill');
var contr = document.querySelector('.photo-edit__contrast');

var rangeCrop = document.querySelector('.photo-edit__range--crop');
var rangeFill = document.querySelector('.photo-edit__range--fill');
var rangeContr = document.querySelector('.photo-edit__range--contrast');

crop.addEventListener('click', cropToggle);
fill.addEventListener('click', fillToggle);
contr.addEventListener('click', contrToggle);

function cropToggle() {
  crop.classList.add('photo-edit__crop--active');
  fill.classList.remove('photo-edit__fill--active');
  contr.classList.remove('photo-edit__contrast--active');
  rangeCrop.classList.add('photo-edit__range--show');
  rangeFill.classList.remove('photo-edit__range--show');
  rangeContr.classList.remove('photo-edit__range--show');
};
function fillToggle() {
  crop.classList.remove('photo-edit__crop--active');
  fill.classList.add('photo-edit__fill--active');
  contr.classList.remove('photo-edit__contrast--active');
  rangeCrop.classList.remove('photo-edit__range--show');
  rangeFill.classList.add('photo-edit__range--show');
  rangeContr.classList.remove('photo-edit__range--show');
};
function contrToggle() {
  crop.classList.remove('photo-edit__crop--active');
  fill.classList.remove('photo-edit__fill--active');
  contr.classList.add('photo-edit__contrast--active');
  rangeCrop.classList.remove('photo-edit__range--show');
  rangeFill.classList.remove('photo-edit__range--show');
  rangeContr.classList.add('photo-edit__range--show');
};
