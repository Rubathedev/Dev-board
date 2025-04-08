// alert("my name is rubayet");
//color changing function
document.getElementById("color-btn").addEventListener("click", function() {
    let bodyElement = document.body; 
    let newColor = getRandomColor(); 
    bodyElement.style.backgroundColor = newColor; 
  });
  
  // Function to generate a random hexadecimal color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }