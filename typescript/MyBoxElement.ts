/// <reference path="utils.ts" />

/**
 * 布衣的盒元素
 */
class BuyiBoxElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        const root = this.shadowRoot
        if (root == null) { throw '无法获取 shadowRoot' }
        this.root = root
        this.titleElement = document.createElement('label')
        this.root.appendChild(this.titleElement)
        this.titleElement.style.display = 'block'
        this.titleElement.style.marginBottom = '7px'
        this.titleElement.style.fontWeight = 'bold'
        this.titleElement.style.fontSize = 'large'
        this.contentElement = document.createElement('div')
        this.root.appendChild(this.contentElement)
    }

    protected root: ShadowRoot
    protected titleElement: HTMLLabelElement
    protected contentElement: HTMLDivElement

    static get observedAttributes(): string[] {
        return ['title']
    }
    protected attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
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

customElements.define('buyi-box', BuyiBoxElement)
