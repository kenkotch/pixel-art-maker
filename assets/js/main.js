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
  listen.addEventListener('click', function() {
    // console.log(event.target.id)
    event.target.classList.toggle(currentColor)
  })
}

  //color swatch
function colorSwatch() {
  currentColor = 'red' //  global variable
  let colorGrid = document.querySelector('.colorContain')
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white']
  for (var i = 0; i < colors.length; i++) {
    let color = document.createElement('div')
    color.classList.add('colorGrid')
    color.style.backgroundColor = colors[i]
    color.id = (colors[i])
    colorGrid.appendChild(color)
  }
  // eventListener-colors
  let paint = document.querySelector('.colorContain')
  paint.addEventListener('click', function() {
    currentColor = event.target.id
    console.log(currentColor)
  })
}

//  call functions
gridMaker(972)
colorSwatch()
})
