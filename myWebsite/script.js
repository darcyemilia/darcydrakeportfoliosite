// var imageList = document.getElementsByClassName("portfolioImages");
//
// console.log(imageList.length);
//
// for (var i = 0; i < (array).length; i++) {
//   (array)[i]
// }
// imageList.addEventListener("click", function(){
//   alert("well, the function is running");
// });

// {
// }


var $portfolioimages = $('.portfolioImages')


///this will rearrange the images
$portfolioimages.click(function (){
    $(this).parent().prepend(this);
});

// $portfolioimages.click(function(){
// $(this).css('width', '100%');
// });

// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
