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
            const str:string = _this.editor.getContent()
            if (!_this.editor.getSelectionModel().isCollapsed()) {
                _this.editor.insertTextAtCursor(`**${str?.substring(_this.editor.getCusor().anchor,_this.editor.getCusor().focus)}**`)
            } else {
                _this.editor.insertTextAtCursor(`****`)
                console.log(_this.editor.getCusor().anchor);
                _this.editor.setSelection(_this.editor.getCusor().anchor-2)
            }
        })
    }
}

