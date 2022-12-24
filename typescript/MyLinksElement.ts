/// <reference path="utils.ts" />
/// <reference path="MyBoxElement.ts" />

interface BuyiLink {
    Text: string
    URL: string
    Icon: string
}

/**
 * 布衣的链接列表元素
 */
class BuyiLinksElement extends BuyiBoxElement {
    constructor() {
        super()
        const style = document.createElement('style')
        style.innerText = `
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
        }`
        this.root.appendChild(style)
    }

    private readonly links: BuyiLink[] = []
    /**
     * 添加一条链接，注意，链接只能增加不能减少
     */
    public AddLink(text: string, icon: string, url: string): void {
        const link: BuyiLink = { Text: text, URL: url, Icon: icon }
        this.links.push(link)
    }
    /**
     * 展示顺序是随机的吗
     */
    public RandomOrder: boolean = true
    /**
     * 刷新链接的显示
     */
    public RefreshUI(): void {
        this.contentElement.innerText = ''
        if (this.RandomOrder) { DisorderArray(this.links) }
        for (const link of this.links) {
            const ac = document.createElement('a')
            ac.href = link.URL
            ac.target = '_blank'
            const span = document.createElement('span')
            span.innerText = link.Text
            const img = document.createElement('img')
            img.src = `/icons/${link.Icon}.webp`
            img.alt = link.Icon
            ac.appendChild(img)
            ac.appendChild(span)
            this.contentElement.appendChild(ac)
            this.contentElement.appendChild(document.createElement('br'))
        }
    }
    static Create(title: string, randomOrder: boolean): BuyiLinksElement {
        const e = document.createElement('buyi-links') as BuyiLinksElement
        e.title = title
        e.RandomOrder = randomOrder
        return e
    }
}

customElements.define('buyi-links', BuyiLinksElement)
