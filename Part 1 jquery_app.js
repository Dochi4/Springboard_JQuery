
// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(function(){
  console.log("Let’s get ready to party with jQuery")
})
// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$("img").addClass("image-center")
// 3. Remove the last paragraph in the article.
$("p").eq(5).remove();
// 4. Set the font size of the title to be a random pixel size from 0 to 100.

$("h1").each(function(){
  let randomSize = Math.floor(Math.random()*101)
  $(this).css("font-size",randomSize+"px")
  console.log(randomSize)
});

// 5. Add an item to the list; it can say whatever you want.

$("ol").append($("<li> I LIKE PUPPYS</li>"))

// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.

const sorryList = $("<p>I AM SO SO SORRY FOR THE LIST IT WAS A BIG MISTAKE. CALL ME AT 999-999-9999 to tell me how dumb it was to make a pupy list. YOU CAN HAVE ALL MY MONKEYS TOO</p>")

$(".col-sm-8").siblings(".col-sm-4").empty().append(sorryList)

// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$(".form-control").on("input",function(){
  let r = $(".form-control").eq(0).val();
  let g = $(".form-control").eq(1).val();
  let b = $(".form-control").eq(2).val();
  $("body").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
});

// 8. Add an event listener so that when you click on the image, it is removed from the DOM

$("img").on("click",function(){
  $(this).remove()
})

