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
class BuyiLinksElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const root = this.shadowRoot;
        if (root == null) {
            throw '无法获取 shadowRoot';
        }
        this.root = root;
        this.titleElement = document.createElement('label');
        this.root.appendChild(this.titleElement);
        this.linksElement = document.createElement('div');
        this.root.appendChild(this.linksElement);
        const style = document.createElement('style');
        style.innerText = `
        label {
            display: block;
            margin-bottom: 7px;
            font-weight: bold;
            font-size: large;
        }
        
        a {
            color: rgb(44, 140, 172);
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        img {
            width: 20px;
            margin-right: 5px;
        }`;
        this.root.appendChild(style);
    }
    root;
    titleElement;
    linksElement;
    links = [];
    AddLink(text, icon, url) {
        const link = { Text: text, URL: url, Icon: icon };
        this.links.push(link);
    }
    RandomOrder = true;
    RefreshUI() {
        this.linksElement.innerText = '';
        if (this.RandomOrder) {
            DisorderArray(this.links);
        }
        for (const link of this.links) {
            const ac = document.createElement('a');
            ac.href = link.URL;
            ac.target = '_blank';
            const span = document.createElement('span');
            span.innerText = link.Text;
            const img = document.createElement('img');
            img.src = `/icons/${link.Icon}.webp`;
            img.alt = link.Icon;
            ac.appendChild(img);
            ac.appendChild(span);
            this.linksElement.appendChild(ac);
            this.linksElement.appendChild(document.createElement('br'));
        }
    }
    static get observedAttributes() {
        return ['title'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "title":
                if (newValue == null) {
                    newValue = '';
                }
                this.titleElement.innerText = newValue;
                break;
            default:
                break;
        }
    }
}
customElements.define('buyi-links', BuyiLinksElement);
function NewBuyiLinksElement(title, randomOrder) {
    const e = document.createElement('buyi-links');
    e.title = title;
    e.RandomOrder = randomOrder;
    return e;
}
(function () {
    const maxPhotoIndex = 12;
    const minPhotoIndex = 0;
    const photoIndexArray = [];
    for (let index = minPhotoIndex; index <= maxPhotoIndex; index++) {
        photoIndexArray.push(index);
    }
    DisorderArray(photoIndexArray);
    const divPhoto = document.getElementById('photo');
    const imgPhoto = document.createElement('img');
    divPhoto.appendChild(imgPhoto);
    let photoChangedTime = 0;
    imgPhoto.addEventListener('load', function () {
        if (photoChangedTime > 1) {
            window.scrollBy(0, window.innerHeight);
        }
    });
    let lastPhotoIndex = 0;
    function changePhoto() {
        photoChangedTime += 1;
        lastPhotoIndex += 1;
        if (lastPhotoIndex > maxPhotoIndex) {
            lastPhotoIndex = minPhotoIndex;
        }
        imgPhoto.src = `/photos/a${photoIndexArray[lastPhotoIndex].toFixed().padStart(2, '0')}.webp`;
    }
    changePhoto();
    imgPhoto.addEventListener('click', changePhoto);
})();
(function () {
    const divSections = document.getElementById('sections');
    divSections.innerText = '';
    const linksElements = [];
    let links = NewBuyiLinksElement("关注我", true);
    links.AddLink("Twitter", "twitter", "https://twitter.com/chenbuyi2019");
    links.AddLink("GitHub", "github", "https://github.com/chenbuyi2019");
    links.AddLink("Steam", "steam", "https://steamcommunity.com/profiles/76561198099466387");
    divSections.appendChild(links);
    links.RefreshUI();
    linksElements.push(links);
    links = NewBuyiLinksElement('我的好朋友', true);
    links.AddLink("技术宅的结界", "0xaa55", "https://www.0xaa55.com/");
    links.AddLink("Sonic853", "853", "https://blog.853lab.com/");
    links.AddLink("AceSheep", "acesheep", "https://blog.acesheep.com/");
    divSections.appendChild(links);
    links.RefreshUI();
    linksElements.push(links);
    links = NewBuyiLinksElement('我的作品', true);
    links.AddLink("这个网站", "typescript", "https://github.com/chenbuyi2019/website");
    links.AddLink("Firefox 扩展：垃圾箱", "firefox", "https://github.com/chenbuyi2019/buyitools");
    links.AddLink("Garry's Mod Addon: Bondage Tool", "garrysmod", "https://gist.github.com/chenbuyi2019/e97a14b3eec275f56b261b1b5e348670");
    divSections.appendChild(links);
    links.RefreshUI();
    linksElements.push(links);
    links = NewBuyiLinksElement('我的配置', true);
    links.AddLink("AMD Ryzen™ 5 5600X", "amd", "https://www.amd.com/en/products/cpu/amd-ryzen-5-5600x");
    links.AddLink("Asus TUF GAMING B550M-PLUS WIFI II", "asus", "https://www.asus.com.cn/motherboards-components/motherboards/tuf-gaming/tuf-gaming-b550m-plus-wifi-ii/");
    links.AddLink("AMD Radeon™ RX 6600", "amd", "https://www.amd.com/en/products/graphics/amd-radeon-rx-6600");
    divSections.appendChild(links);
    links.RefreshUI();
    linksElements.push(links);
})();
