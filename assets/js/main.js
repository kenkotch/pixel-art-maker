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
    // console.log(event.target.id)
    event.target.classList.toggle(currentColor)
  })
}

  //color swatch
function colorSwatch() {
  currentColor = 'red' //  global variable
  colorGrid = document.querySelector('.colorContain')
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'gold']
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

    //add currentColor to brushColor
    currentPaint.classList.remove(currentColor)
    // console.log(currentPaint)
    currentPaint.classList.add(currentColor)
    // console.log('currentColor is ' + currentColor)
    // console.log('currentPaint is ' + currentPaint)
  })
}

  // brush color indicator on right side
function brushColor() {
  currentPaint = document.createElement('div')
  currentPaint.classList.add('selectedColor')
  colorGrid.appendChild(currentPaint)
  console.log(currentPaint);
}



  // function colorSwatch() {
  //   currentColor = 'red' //  global variable
  //   let colorGrid = document.querySelector('.colorContain')
  //   const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'gold']
  //   for (var i = 0; i < colors.length; i++) {
  //     let color = document.createElement('div')
  //     color.classList.add('colorGrid')
  //     color.style.backgroundColor = colors[i]
  //     color.id = (colors[i])
  //     colorGrid.appendChild(color)
  //   }


  // let brush = document.createElement('div')
  // // brush.classList.add(.selectedColor)
  // brush.lastChild(container)
  // console.log(`brush: ${brush}`)
  // console.log(`currentColor ${currentColor}`)

  // li.innerHTML = text
  // ol.appendChild(li)



//  call functions
gridMaker(972)
colorSwatch()
brushColor()
})
