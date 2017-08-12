document.addEventListener('DOMContentLoaded', function() {

  //grid
function gridMaker(numOfBoxes) {
  let position = document.querySelector('.grid')
  for (var i = 0; i < numOfBoxes; i++) {
    let pixel = document.createElement('div')
    pixel.classList.add('box')
    let pixelID = pixel.id = (`pixel${[i]}`)
    position.appendChild(pixel)
  }
  //eventListener-box
  var listen = document.querySelector('.grid')
  listen.addEventListener('click', function() {
    // let pix = document.getElementById('event.target.id')
    console.log(event.target.id);
    event.target.classList.toggle(currentColor)
  })
}

  //color swatch
function colorSwatch() {
   currentColor = 'red'
  let colorGrid = document.querySelector('.colorContain')
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white']
  for (var i = 0; i < colors.length; i++) {
    let color = document.createElement('div')
    color.classList.add('colorGrid')
    color.style.backgroundColor = colors[i]
    let colorID = color.id = (`${colors[i]}`)
    colorGrid.appendChild(color)
  }
  // eventListener-colors
  var paint = document.querySelector('.colorContain')
  paint.addEventListener('click', function() {
    let col = document.getElementById('event.target.id')
    currentColor = event.target.id
    console.log(currentColor)
    // col.add(event.target.id)
    // console.log(col);
  })
}






gridMaker(972)
colorSwatch()

})
