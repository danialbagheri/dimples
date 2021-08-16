const redirect = (value) => {
  let baseUrl = `https://${value}.dimplesdepilatory.com`;
  window.location.href = baseUrl;
};

function getThisYearDate() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
}
