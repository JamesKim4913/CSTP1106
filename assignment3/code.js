// View big photo
function view_bigimg(){
  // Get src value
  imgSrc = $(this).attr('src')
  // Set src value in bigimg class
  $('.bigimg > img').attr('src', imgSrc)
}

function setup(){
  $('body').on('click', '.thumb > img', view_bigimg)
}

// Event that is fired when DOM is loaded
$(document).ready(setup)
