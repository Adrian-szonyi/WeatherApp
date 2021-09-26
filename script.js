function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplayEl.text(rightNow);
  }
  displayTime();
  var mykey = config.MY_KEY;

  // https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
  // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}