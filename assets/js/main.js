document.addEventListener('DOMContentLoaded', function() {

  //grid
function gridMaker(numOfBoxes) {
  let position = document.querySelector('.grid')
  for (var i = 0; i < numOfBoxes; i++) {
    let pixel = document.createElement('div')
    pixel.classList.add('box')
    pixel.id = (`pixel${[i]}`)
    position.appendChild(pixel)
  }
  //eventListener-box
  let listen = document.querySelector('.grid')
  listen.addEventListener('mousedown', function() {
    event.target.classList.toggle(currentColor)
  })
}

  //color swatches
function colorSwatch() {
  currentColor = 'red' //  global variable
  colorGrid = document.querySelector('.colorContain')
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'plum', 'indigo', 'violet', 'black', 'white', 'gold', 'rainbow']
  for (var i = 0; i < colors.length; i++) {
    let color = document.createElement('div')
    color.classList.add('colorGrid')
    color.style.backgroundColor = colors[i]
    color.id = (colors[i])
    colorGrid.appendChild(color)
  }
  // eventListener-colors
  paint = document.querySelector('.colorContain')
  paint.addEventListener('click', function() {
    currentColor = event.target.id
    //add currentColor to brushColor -there must be a better way than typing all the colors but putting the variable doesnt work
    currentPaint.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'plum', 'indigo', 'violet', 'black', 'white', 'gold', 'rainbow')
    currentPaint.classList.add(currentColor)
    console.log(currentColor);
  })
}

  // brush color indicator on right side
function brushColor() {
  currentPaint = document.createElement('div')
  currentPaint.classList.add('selectedColor', 'red')
  colorGrid.appendChild(currentPaint)

  //add text to label current color


}


//  call functions
gridMaker(972)
colorSwatch()
brushColor()
})
