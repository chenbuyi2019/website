/// <reference path="utils.ts" />
/// <reference path="MyLinksElement.ts" />

(function () {
    const divSections = document.getElementById('sections') as HTMLDivElement
    divSections.innerText = ''

    const linksElements: BuyiLinksElement[] = []

    let links = BuyiLinksElement.Create("关注我", true)
    links.AddLink("Twitter", "twitter", "https://twitter.com/chenbuyi2019")
    links.AddLink("GitHub", "github", "https://github.com/chenbuyi2019")
    links.AddLink("Steam", "steam", "https://steamcommunity.com/profiles/76561198099466387")
    divSections.appendChild(links)
    links.RefreshUI()
    linksElements.push(links)

    links = BuyiLinksElement.Create('我的好朋友', true)
    links.AddLink("技术宅的结界", "0xaa55", "https://www.0xaa55.com/")
    links.AddLink("Sonic853", "853", "https://blog.853lab.com/")
    links.AddLink("AceSheep", "acesheep", "https://blog.acesheep.com/")
    divSections.appendChild(links)
    links.RefreshUI()
    linksElements.push(links)

    links = BuyiLinksElement.Create('我的作品', true)
    links.AddLink("这个网站", "typescript", "https://github.com/chenbuyi2019/website")
    links.AddLink("Firefox 扩展：垃圾箱", "firefox", "https://github.com/chenbuyi2019/buyitools")
    links.AddLink("Garry's Mod Addon: Bondage Tool", "garrysmod", "https://gist.github.com/chenbuyi2019/e97a14b3eec275f56b261b1b5e348670")
    divSections.appendChild(links)
    links.RefreshUI()
    linksElements.push(links)

    links = BuyiLinksElement.Create('我的配置', true)
    links.AddLink("AMD Ryzen™ 5 5600X", "amd", "https://www.amd.com/en/products/cpu/amd-ryzen-5-5600x")
    links.AddLink("Asus TUF GAMING B550M-PLUS WIFI II", "asus", "https://www.asus.com.cn/motherboards-components/motherboards/tuf-gaming/tuf-gaming-b550m-plus-wifi-ii/")
    links.AddLink("AMD Radeon™ RX 6600", "amd", "https://www.amd.com/en/products/graphics/amd-radeon-rx-6600")
    divSections.appendChild(links)
    links.RefreshUI()
    linksElements.push(links)

})()
