
  const text = "Welcome to the Half-Life Interactive Platform";
  const speed = 70; // typing speed in milliseconds

  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
