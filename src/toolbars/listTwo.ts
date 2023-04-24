import Editor  from "editor";
import {icons} from './icon'
export class ListTwo {
    public element: HTMLElement;
    public editor: Editor;

    constructor(editor:Editor) {
        this.element = document.createElement("div");
        this.element.className = "hw-toolbar_item hw-toolbar_listTwo";
        this.element.innerHTML = icons.ListTwo;
        this.element.setAttribute("data-type", "listTwo");
        this.editor = editor
        this.addEventListener()
    }

    addEventListener() {
        const _this = this
        this.element.addEventListener("click", (e) => {
            this.editor.setSelection(this.editor.getCusor().anchor + 2)
            this.editor.insertText(this.editor.getLineCusor(), '- ')
        })
    }
    // TODO:增加tab监听
}

