let gameData = {
	imageIndexesArray: [],
	imageSet: 1,
	previouslySelectedElement: null,

	changeOriginalImageSet: function() {
		this.imageSet = Math.floor(Math.random() * 3) + 1
		const originalImage = document.getElementById('originalImage')
		originalImage.setAttribute('src', `./data/image${this.imageSet}/originalImage.png`)
	},

	generateImageIndexes: function() {
		const uniqueNumbers = new Set()
		while (uniqueNumbers.size < 9) {
			uniqueNumbers.add(Math.ceil(Math.random() * 9))
		}
		this.imageIndexesArray = [...uniqueNumbers]
	},

	updatePreviouslySelectedElement: function(newElement) {
		this.previouslySelectedElement = newElement
	}
}

export default gameData