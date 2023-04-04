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
            switch (i) {
                case 0:
                    li.innerHTML = icons.H1 + "<span>  一级标题</span>"
                    li.addEventListener("click", () => {
                        const str: string = _this.editor.getContent()
                        if (_this.editor.getLineModel().indexOf('# ') === 0) {
                            return
                        }
                        _this.editor.insertText(_this.editor.getLineCusor(),'# ')
                        _this.hElementHide()
                    })
                    break;
                case 1:
                    li.innerHTML = icons.H2 + "<span>  二级标题</span>"
                    break;
                case 2:
                    li.innerHTML = icons.H3 + "<span>  三级标题</span>"
                    break;
                case 3:
                    li.innerHTML = icons.LevelFourTitle + "<span>  四级标题</span>"
                    break;
                case 4:
                    li.innerHTML = icons.LevelFiveTitle + "<span>  五级标题</span>"
                    break;
                case 5:
                    li.innerHTML = icons.LevelSixTitle + "<span>  六级标题</span>"
                    break;
                default:
                    break;
            }
            
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
}

