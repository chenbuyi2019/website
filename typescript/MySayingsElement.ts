/// <reference path="utils.ts" />
/// <reference path="MyBoxElement.ts" />

interface BuyiSaying {
    Text: string
    Author: string
}

/**
 * 布衣的废话元素
 */
class BuyiSayingsElement extends BuyiBoxElement {
    constructor() {
        super()
        const me = this
        this.contentElement.addEventListener('click', function () {
            me.RefreshUI()
        })
        this.contentElement.style.padding = '5px'
        this.contentElement.style.cursor = 'pointer'
        this.sayingTextElement = document.createElement("div")
        this.sayingAuthorElement = document.createElement('div')
        this.sayingAuthorElement.style.textAlign = 'right'
        this.contentElement.append(this.sayingTextElement, this.sayingAuthorElement)
    }

    private readonly sayingTextElement: HTMLDivElement
    private readonly sayingAuthorElement: HTMLDivElement
    private readonly sayings: BuyiSaying[] = []
    private lastSayingIndex: number = -1

    /**
     * 添加一条废话，注意，废话只能增加不能减少
     */
    public AddSaying(text: string, author: string) {
        this.sayings.push({ Text: text, Author: author })
    }

    public RefreshUI(): void {
        const len = this.sayings.length
        if (len < 1) { return }
        const last = this.lastSayingIndex
        let index = last
        if (len > 1) {
            while (index == last) {
                index = GetRandInt(0, len - 1)
            }
        }
        const s = this.sayings[index]
        this.lastSayingIndex = index
        this.sayingTextElement.innerText = s.Text
        this.sayingAuthorElement.innerText = "——" + s.Author
    }

    static Create(title: string): BuyiSayingsElement {
        const e = document.createElement('buyi-saying') as BuyiSayingsElement
        e.title = title
        return e
    }
}

customElements.define('buyi-saying', BuyiSayingsElement)
