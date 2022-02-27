// why doesn't works??
// $("span").on('click', function (event) { 
//     alert($("span").text());
//     var promise = navigator.clipboard.writeText("hello");
//     navigator.clipboard.writeText("TEXT_TO_COPY_TO").then(() => {
//       /* Resolved - text copied to clipboard */
//     },() => {
//       /* Rejected - clipboard failed */
//     });
//     /*event.preventDefault();
//     if (event.clipboardData) {
//     event.clipboardData.setData("text/plain", event.target.textContent);
//     console.log(event.clipboardData.getData("text"))
//     }*/
// });

$("span").bind( "click", function(event) {
  navigator.clipboard.writeText(event.target.textContent).then(() => {
    alert("sucess");
  },() => {
    alert("fails");
  });
});