"use strict";
function GetRandInt(a, b) {
    if (a == b) {
        return a;
    }
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return Math.floor(Math.random() * (max + 0.99 - min) + min);
}
function DisorderArray(array) {
    if (array.length < 1) {
        return;
    }
    const t1 = array.splice(0, array.length);
    const t2 = [];
    while (t1.length > 0) {
        const index = GetRandInt(0, t1.length - 1);
        t2.push(t1.splice(index, 1)[0]);
    }
    array.push(...t2);
}
(function () {
    const divSections = document.getElementById('sections');
    divSections.innerText = '';
    function addSection(title, links, disOrder = false) {
        const section = document.createElement('section');
        const label = document.createElement('label');
        section.appendChild(label);
        label.innerText = title;
        if (disOrder) {
            DisorderArray(links);
        }
        for (const link of links) {
            const ak = document.createElement('a');
            ak.href = link.URL;
            ak.target = '_blank';
            const span = document.createElement('span');
            span.innerText = link.Text;
            const img = document.createElement('img');
            img.src = `/icons/${link.Icon}.webp`;
            img.alt = link.Icon;
            ak.appendChild(img);
            ak.appendChild(span);
            section.appendChild(ak);
            section.appendChild(document.createElement('br'));
        }
        divSections.appendChild(section);
    }
    addSection('关注我', [
        { Text: "Twitter", Icon: "twitter", URL: "https://twitter.com/chenbuyi2019" },
        { Text: "GitHub", Icon: "github", URL: "https://github.com/chenbuyi2019" },
        { Text: "Steam", Icon: "steam", URL: "https://steamcommunity.com/profiles/76561198099466387" }
    ], true);
    addSection('我的好朋友', [
        { Text: "技术宅的结界", Icon: "0xaa55", URL: "https://www.0xaa55.com/" },
        { Text: "Sonic853", Icon: "853", URL: "https://blog.853lab.com/" },
        { Text: "AceSheep", Icon: "acesheep", URL: "https://blog.acesheep.com/" }
    ], true);
    addSection('我的作品', [
        { Text: "这个网站", Icon: "typescript", URL: "https://github.com/chenbuyi2019/website" },
        { Text: "Firefox 扩展：垃圾箱", Icon: "firefox", URL: "https://github.com/chenbuyi2019/buyitools" },
        { Text: "Garry's Mod Addon: Bondage Tool", Icon: "garrysmod", URL: "https://gist.github.com/chenbuyi2019/e97a14b3eec275f56b261b1b5e348670" }
    ]);
    addSection('我的配置', [
        { Text: "Kubuntu 22.04", Icon: "kubuntu", URL: "https://github.com/chenbuyi2019/notes/blob/master/Kubuntu%E9%87%8D%E8%A3%85%E7%AC%94%E8%AE%B0.md" },
        { Text: "AMD Ryzen™ 5 5600X", Icon: "amd", URL: "https://www.amd.com/en/products/cpu/amd-ryzen-5-5600x" },
        { Text: "Asus TUF GAMING B550M-PLUS WIFI II", Icon: "asus", URL: "https://www.asus.com" },
        { Text: "AMD Radeon™ RX 6600", Icon: "amd", URL: "https://www.amd.com/en/products/graphics/amd-radeon-rx-6600" },
    ]);
})();
(function () {
    const divPhoto = document.getElementById('photo');
    let lastPhotoIndex = GetRandInt(1, 12);
    const imgPhoto = document.createElement('img');
    divPhoto.appendChild(imgPhoto);
    let photoChangedTime = 0;
    imgPhoto.addEventListener('load', function () {
        if (photoChangedTime > 1) {
            window.scrollBy(0, window.innerHeight);
        }
    });
    function changePhoto() {
        photoChangedTime += 1;
        let newIndex = lastPhotoIndex;
        while (newIndex == lastPhotoIndex) {
            newIndex = GetRandInt(1, 12);
        }
        lastPhotoIndex = newIndex;
        imgPhoto.src = `/photos/a${lastPhotoIndex.toFixed().padStart(2, '0')}.webp`;
    }
    changePhoto();
    imgPhoto.addEventListener('click', changePhoto);
})();
