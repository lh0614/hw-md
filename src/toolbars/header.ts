import Editor from 'editor';
import { icons } from './icon';
export class Header {
    public element: HTMLElement;
    public editor: Editor;
    private hElement: HTMLElement;
    constructor(editor: Editor) {
        this.editor = editor
        this.element = document.createElement("div");
        this.element.className = "hw-toolbar_item hw-toolbar_head";
        this.element.innerHTML = icons.H;
        this.element.setAttribute("data-type", "header");
        this.addEventLintsener()
        this.createHeader()
        setTimeout(() => {
            this.element.parentElement?.appendChild(this.hElement)
        }, 0);
        
    }

    addEventLintsener() {
        const _this = this
        this.element.addEventListener('mouseover', () => {
            _this.hElementShow()
        })
        // this.element.addEventListener('mouseout', () => {
        //     setTimeout(() => {
        //        _this.hElementHide()
        //     }, 1000);
        // })
    }

    createHeader() {
        const _this = this
        this.hElement = document.createElement("div");
        _this.hElementHide()
        setTimeout(() => {
            this.hElement.style.position="absolute"
            this.hElement.style.top=this.element.offsetTop+this.element.offsetHeight+"px"
            this.hElement.style.left=this.element.offsetLeft+"px"
        }, 0);
        for (let i = 0; i < 6; i++) {
            const li = document.createElement("div");
            this.createLi(i,li)
            this.hElement.appendChild(li)
        }
        this.hElement.addEventListener("mouseleave", () => {
            console.log(1111);
            this.hElementHide()
        })
    }

    hElementShow() {
        this.hElement.className = "hw-toolbar-head-level"
    }
    hElementHide() {
        this.hElement.className = "hw-toolbar-head-level none"
    }

    createLi(i:number, li:HTMLElement) {
        const title = ['一', '二', '三', '四', '五', '六']
        const iconsLevel = ['H1', 'H2', 'H3', 'LevelFourTitle', 'LevelFiveTitle', 'LevelSixTitle']
        li.innerHTML = `${icons[iconsLevel[i]]} <span>  ${title[i]}级标题</span>`
        li.addEventListener("click", () => { 
            this.liClick(i)
        })
    }
    
    liClick(i: number) {
        const headerArr = ['# ','## ','### ','#### ','##### ','###### ']
        const str: string = this.editor.getContent()
        let isHeader = -1
        for (let j = 0; j < headerArr.length; j++) {
            const element = headerArr[j];
            if (this.editor.getLineModel().indexOf(element)===0) {
                isHeader = j
                break
            }
        }
        if (isHeader !== -1) {
            this.editor.deleteText(this.editor.getLineCusor(),isHeader+2)
        }
        this.editor.setSelection(this.editor.getCusor().anchor + i + 2)
        this.editor.insertText(this.editor.getLineCusor(),headerArr[i])
        this.hElementHide()
    }
}

