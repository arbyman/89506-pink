var crop = document.querySelector('.photo-edit__crop');
var fill = document.querySelector('.photo-edit__fill');
var contrast = document.querySelector('.photo-edit__contrast');
var inputCrop = document.querySelector('.photo-edit__range--crop');
var inputFill = document.querySelector('.photo-edit__range--fill');
var inputContrast = document.querySelector('.photo-edit__range--contrast');

crop.addEventListener('click', setCrop);
fill.addEventListener('click', setFill);
contrast.addEventListener('click', setContrast);


function setCrop() {
  crop.classList.add('photo-edit__crop--active');
  fill.classList.remove('photo-edit__fill--active');
  contrast.classList.remove('photo-edit__contrast--active');
  inputCrop.classList.add('photo-edit__range--show');
  inputFill.classList.remove('photo-edit__range--show');
  inputContrast.classList.remove('photo-edit__range--show');
}
function setFill() {
  crop.classList.remove('photo-edit__crop--active');
  fill.classList.add('photo-edit__fill--active');
  contrast.classList.remove('photo-edit__contrast--active');
  inputCrop.classList.remove('photo-edit__range--show');
  inputFill.classList.add('photo-edit__range--show');
  inputContrast.classList.remove('photo-edit__range--show');
}
function setContrast() {
  crop.classList.remove('photo-edit__crop--active');
  fill.classList.remove('photo-edit__fill--active');
  contrast.classList.add('photo-edit__contrast--active');
  inputCrop.classList.remove('photo-edit__range--show');
  inputFill.classList.remove('photo-edit__range--show');
  inputContrast.classList.add('photo-edit__range--show');
}