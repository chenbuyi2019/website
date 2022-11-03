
interface Link {
    Text: string
    URL: string
    Icon: string
}

const divMain = document.getElementsByTagName('main')[0] as HTMLElement
divMain.innerText = ''

function addSection(title: string, links: Link[]): void {
    const section = document.createElement('section')
    const label = document.createElement('label')
    section.appendChild(label)
    label.innerText = title
    for (const link of links) {
        const ak = document.createElement('a')
        ak.href = link.URL
        ak.target = '_blank'
        const span = document.createElement('span')
        span.innerText = link.Text
        const img = document.createElement('img')
        img.src = `./icons/${link.Icon}.webp`
        ak.appendChild(img)
        ak.appendChild(span)
        section.appendChild(ak)
        section.appendChild(document.createElement('br'))
    }
    divMain.appendChild(section)
}

addSection('关注我', [
    { Text: "Twitter", Icon: "twitter", URL: "https://twitter.com/chenbuyi2019" },
    { Text: "GitHub", Icon: "github", URL: "https://github.com/chenbuyi2019" },
    { Text: "Steam", Icon: "steam", URL: "https://steamcommunity.com/profiles/76561198099466387" }
])

addSection('我的好朋友', [
    { Text: "技术宅的结界", Icon: "0xaa55", URL: "https://www.0xaa55.com/" },
    { Text: "科学家晴猫", Icon: "bbleae", URL: "https://baka.studio/" },
    { Text: "Sonic853", Icon: "853", URL: "https://blog.853lab.com/" }
])

addSection('我的作品', [
    { Text: "这个网站", Icon: "typescript", URL: "https://github.com/chenbuyi2019/website" },
    { Text: "Firefox 扩展：垃圾箱", Icon: "firefox", URL: "https://github.com/chenbuyi2019/buyitools" },
    { Text: "Garry's Mod Addon: Bondage Tool", Icon: "garrysmod", URL: "https://gist.github.com/chenbuyi2019/e97a14b3eec275f56b261b1b5e348670" }
])

addSection('我的配置', [
    { Text: "Kubuntu 22.04", Icon: "kubuntu", URL: "https://github.com/chenbuyi2019/notes/blob/master/Kubuntu%E9%87%8D%E8%A3%85%E7%AC%94%E8%AE%B0.md" },
    { Text: "AMD Ryzen 5 5600X 6-Core Processor", Icon: "amd", URL: "https://www.amd.com/en/products/cpu/amd-ryzen-5-5600x" },
    { Text: "Asus TUF GAMING B550M-PLUS WIFI II", Icon: "asus", URL: "https://www.asus.com" },
    { Text: "AMD DIMGREY_CAVEFISH", Icon: "amd", URL: "https://www.amd.com/en/products/graphics/amd-radeon-rx-6600" },
])
