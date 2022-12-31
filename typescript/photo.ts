/// <reference path="utils.ts" />

(function () {
    const maxPhotoIndex = 15
    const minPhotoIndex = 0
    const photoIndexArray: number[] = []
    for (let index = minPhotoIndex; index <= maxPhotoIndex; index++) {
        photoIndexArray.push(index)
    }
    DisorderArray(photoIndexArray)

    const divPhoto = document.getElementById('photo') as HTMLDivElement
    const imgPhoto = document.createElement('img')
    divPhoto.appendChild(imgPhoto)

    let photoChangedTime = 0
    imgPhoto.addEventListener('load', function () {
        if (photoChangedTime > 1) { window.scrollBy(0, window.innerHeight) }
    })

    let lastPhotoIndex = 0
    function changePhoto() {
        photoChangedTime += 1
        lastPhotoIndex += 1
        if (lastPhotoIndex > maxPhotoIndex) { lastPhotoIndex = minPhotoIndex }
        imgPhoto.src = `/photos/a${photoIndexArray[lastPhotoIndex].toFixed().padStart(2, '0')}.webp`
    }
    changePhoto()
    imgPhoto.addEventListener('click', changePhoto)
})()