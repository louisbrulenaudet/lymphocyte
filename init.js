const headers = {
  "Accept": "application/json"
};
const url = "http://ip-api.com/json";
window.fetch(url, { headers })
.then(response => response.json())
.then(body => {
  var country = body.country;
  if (country == "Russia") {
    while (document.body.firstChild) {
        document.body.firstChild.remove();
    };
    document.body.innerHTML = "This website and related services are suspended in your country.";
  };
})
.catch(e => console.error(e));
