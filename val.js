document.addEventListener('DOMContentLoaded', function () {
  function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var meridiem = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zero to minutes if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Display the time in the div
    var timeString = hours + ':' + minutes;
    document.querySelector('.time').textContent = timeString;
    document.querySelector('.AM_PM').textContent = meridiem;

  }

  // Update the time every second
  setInterval(updateTime, 1000);

  // Initial call to set the time immediately
  updateTime();
});