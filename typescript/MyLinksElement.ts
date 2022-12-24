/// <reference path="utils.ts" />

interface BuyiLink {
    Text: string
    URL: string
    Icon: string
}

/**
 * 布衣的链接列表元素
 */
class BuyiLinksElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        const root = this.shadowRoot
        if (root == null) { throw '无法获取 shadowRoot' }
        this.root = root
        this.titleElement = document.createElement('label')
        this.root.appendChild(this.titleElement)
        this.linksElement = document.createElement('div')
        this.root.appendChild(this.linksElement)
        const style = document.createElement('style')
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
        }`
        this.root.appendChild(style)
    }

    private root: ShadowRoot
    private titleElement: HTMLLabelElement
    private linksElement: HTMLDivElement
    private links: BuyiLink[] = []
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
        this.linksElement.innerText = ''
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
            this.linksElement.appendChild(ac)
            this.linksElement.appendChild(document.createElement('br'))
        }
    }
    static get observedAttributes(): string[] {
        return ['title']
    }
    private attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        switch (name) {
            case "title":
                if (newValue == null) { newValue = '' }
                this.titleElement.innerText = newValue
                break
            default:
                break
        }
    }
}

customElements.define('buyi-links', BuyiLinksElement)

function NewBuyiLinksElement(title: string, randomOrder: boolean): BuyiLinksElement {
    const e = document.createElement('buyi-links') as BuyiLinksElement
    e.title = title
    e.RandomOrder = randomOrder
    return e
}
