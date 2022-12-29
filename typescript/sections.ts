/// <reference path="utils.ts" />
/// <reference path="MyLinksElement.ts" />

(function () {
    const divSections = document.getElementById('sections') as HTMLDivElement
    divSections.innerText = ''

    const myBoxes: BuyiBoxElement[] = []

    let links = BuyiLinksElement.Create("关注我", true)
    links.AddLink("Twitter", "twitter", "https://twitter.com/chenbuyi2019")
    links.AddLink("GitHub", "github", "https://github.com/chenbuyi2019")
    links.AddLink("Steam", "steam", "https://steamcommunity.com/profiles/76561198099466387")
    divSections.appendChild(links)
    links.RefreshUI()
    myBoxes.push(links)

    links = BuyiLinksElement.Create('我的好朋友', true)
    links.AddLink("技术宅的结界", "0xaa55", "https://www.0xaa55.com/")
    links.AddLink("Sonic853", "853", "https://blog.853lab.com/")
    links.AddLink("AceSheep", "acesheep", "https://blog.acesheep.com/")
    divSections.appendChild(links)
    links.RefreshUI()
    myBoxes.push(links)

    links = BuyiLinksElement.Create('我的作品', true)
    links.AddLink("这个网站", "typescript", "https://github.com/chenbuyi2019/website")
    links.AddLink("Firefox 扩展：垃圾箱", "firefox", "https://github.com/chenbuyi2019/buyitools")
    links.AddLink("Garry's Mod Addon: Bondage Tool", "garrysmod", "https://gist.github.com/chenbuyi2019/e97a14b3eec275f56b261b1b5e348670")
    divSections.appendChild(links)
    links.RefreshUI()
    myBoxes.push(links)

    links = BuyiLinksElement.Create('我的配置', true)
    links.AddLink("AMD Ryzen™ 5 5600X", "amd", "https://www.amd.com/en/products/cpu/amd-ryzen-5-5600x")
    links.AddLink("Asus TUF GAMING B550M-PLUS WIFI II", "asus", "https://www.asus.com.cn/motherboards-components/motherboards/tuf-gaming/tuf-gaming-b550m-plus-wifi-ii/")
    links.AddLink("AMD Radeon™ RX 6600", "amd", "https://www.amd.com/en/products/graphics/amd-radeon-rx-6600")
    divSections.appendChild(links)
    links.RefreshUI()
    myBoxes.push(links)

    const myself: string = '陈布衣'
    let sayings = BuyiSayingsElement.Create('不太明智的发言')
    sayings.AddSaying("别买EA的游戏，乱封号乱红信，而且退款永远退不到手。", myself)
    sayings.AddSaying("拒不承认自己的作品的价值。包括我已经创作出来的和还没创作出来的。它们都是垃圾。", myself)
    sayings.AddSaying("我为什么能够现在自由自在地生活，是因为我完全抛弃了血缘和学校。", myself)
    sayings.AddSaying("布衣今天在公司也遇到了很不开心的事情，每个月也肯定都会有几次不开心的事情。但是没有父母来滋扰，没有学校来折磨，我都能平稳过渡过来。", myself)
    sayings.RefreshUI()
    divSections.appendChild(sayings)
    myBoxes.push(sayings)

    sayings = BuyiSayingsElement.Create('明智的发言')
    sayings.AddSaying("等一个重装（x", 'infi Wλng')
    sayings.AddSaying("黄巾造反，有意思。黄巾就是造反，你家刘邦就是起义。搞双标，喝喝。", '女孩为何穿短裙《当代互联网现状》')
    sayings.AddSaying("戈尔巴乔夫总书记，如果你真的在寻求和平，如果你真的在寻求苏联和东欧的繁荣昌盛，如果你真的在寻求自由化，那么，到这扇门前来吧。戈尔巴乔夫先生，把这扇门打开！戈尔巴乔夫先生，把这堵墙拆掉！", '罗纳德·里根')
    sayings.AddSaying('所以一元论的刺猬们啊，很难讨论法律问题。因为对于刺猬们啊，只要观点和自己不同，那不是动机有问题就是智商堪忧吗，不是道德败坏就是义务教育没学好。', '罗翔')
    sayings.AddSaying('你发微信，在那搞暧昧的时候，你把这时间拿去读书吗。你把你用在网恋上的时间，那个精力拿去搞学习，你看你搞的上去不吗？说不定你都尼玛是科学家了。','孙笑川')
    sayings.RefreshUI()
    divSections.appendChild(sayings)
    myBoxes.push(sayings)

})()
