import gameData from './src/gameData.js'
import { loadPuzzleImages, createImageContainer } from './src/utils.js'
import { handleClick } from './src/eventHandlers.js'

const startButton = document.querySelector('button')
const puzzleContainer = document.querySelector('.container')
const changeImageButton = document.querySelector('#changeImage')

startButton.addEventListener('click', function() {
  const gameScreen = document.querySelector('.game-screen')
  gameScreen.classList.remove('hide')

  const startScreen = document.querySelector('.start-screen')
  startScreen.classList.add('hide')

  gameData.changeOriginalImageSet()
  gameData.generateImageIndexes()

  for (let i = 0; i < 9; i++) {
    const div = createImageContainer(gameData.imageSet, gameData.imageIndexesArray[i])
    
    div.addEventListener('click', handleClick)

    puzzleContainer.appendChild(div)
  }
})

changeImageButton.addEventListener('click', () => {
  gameData.changeOriginalImageSet()
  loadPuzzleImages(gameData.imageSet, gameData.imageIndexesArray)
})