/// <reference path="utils.ts" />

(function () {
    const divPhoto = document.getElementById('photo') as HTMLDivElement
    let lastPhotoIndex = GetRandInt(1, 12)
    const imgPhoto = document.createElement('img')
    divPhoto.appendChild(imgPhoto)

    let photoChangedTime = 0
    imgPhoto.addEventListener('load', function () {
        if (photoChangedTime > 1) { window.scrollBy(0, window.innerHeight) }
    })

    function changePhoto() {
        photoChangedTime += 1
        let newIndex = lastPhotoIndex
        while (newIndex == lastPhotoIndex) {
            newIndex = GetRandInt(1, 12)
        }
        lastPhotoIndex = newIndex
        imgPhoto.src = `/photos/a${lastPhotoIndex.toFixed().padStart(2, '0')}.webp`
    }
    changePhoto()
    imgPhoto.addEventListener('click', changePhoto)
})()