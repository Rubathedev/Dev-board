// alert("my name is rubayet");
//color changing function
document.getElementById("color-btn").addEventListener("click", function() {
    let bodyElement = document.body; 
    let newColor = randomColor(); 
    bodyElement.style.backgroundColor = newColor; 
  });
  
  
  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  