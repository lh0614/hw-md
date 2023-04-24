import Editor  from "editor";
import editor from 'editor';
import {icons} from './icon'
export class OrderedList {
    public element: HTMLElement;
    public editor: Editor;

    constructor(editor:Editor) {
        this.element = document.createElement("div");
        this.element.className = "hw-toolbar_item hw-toolbar_orderedList";
        this.element.innerHTML = icons.OrderedList;
        this.element.setAttribute("data-type", "orderedList");
        this.editor = editor
        this.addEventListener()
    }

    addEventListener() {
        const _this = this
        this.element.addEventListener("click", (e) => {
            this.editor.setSelection(this.editor.getCusor().anchor + 3)
            this.editor.insertText(this.editor.getLineCusor(), '1. ')
        })
    }
}

