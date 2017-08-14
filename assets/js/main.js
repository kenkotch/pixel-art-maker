document.addEventListener('DOMContentLoaded', function() {

  //grid
function gridMaker(numOfBoxes) {
  let position = document.querySelector('.grid')
  for (var i = 0; i < numOfBoxes; i++) {
    let pixel = document.createElement('div')
    pixel.classList.add('box')
    pixel.id = (`pixel${[i]}`)
    pixel.addEventListener('mouseenter', paint)
    position.appendChild(pixel)
  }
}

  // click and drag to paint
let mouseState = false
let listen = document.querySelector('.grid')
function click() {
    event.target.classList.add(currentColor)
    mouseState = true
  }
listen.addEventListener('mousedown', click)
function paint(){
  listen.addEventListener('mouseup', function() {
    mouseState = false;
  })
  if (mouseState === true) {
    event.target.classList.add(currentColor)
  }
}


  //color swatches
function colorSwatch() {

  colorGrid = document.querySelector('.colorContain')
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'plum', 'indigo', 'violet', 'black', 'white', 'gold', 'rainbow']
  currentColor = colors[0] //  global variable
  for (var i = 0; i < colors.length; i++) {
    let color = document.createElement('div')
    color.classList.add('colorGrid')
    color.classList.add(colors[i])
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

  // //add text to label current color
  let text = document.createElement('p')
  text.classList.add('colorLabel')
  let newText = document.createTextNode('Current Paint Color')
  text.appendChild(newText)
  let pal = document.querySelector('.colorContain')
  pal.appendChild(text)

  // fa-arrow-right

}


//  call functions
gridMaker(972)
colorSwatch()
brushColor()
})
