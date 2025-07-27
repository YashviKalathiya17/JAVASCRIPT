    // Set target date
    const targetDate = new Date("January 1, 2026 00:00:00").getTime();

    // Update every second
    const timer = setInterval(function() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "🎉 Happy New Year!";
        clearInterval(timer);
        return;
      }

      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display countdown
      document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);