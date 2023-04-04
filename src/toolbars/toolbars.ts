import { Bold } from "./bold";
import Editor from '../editor';
import { Header } from "./header";
import { Quote } from "./quote";
import { TextItalic } from "./textItalic";
import { LinkOne } from "./linkOne";
import { Code } from "./code";
import { CodeBrackets } from "./codeBrackets";
import { OrderedList } from "./orderedList";
import { ListTwo } from "./listTwo";

interface Config {
    tools?:Tool[]
}
interface Tool {
    name: string
}
export class Toolbars {
    public element: HTMLElement;
    public config: Config | null
    public editor: Editor
    constructor(editor:Editor,config?:Config) {
        this.element = document.createElement("div");
        this.element.setAttribute("class", "hw-editor-toolbars");
        this.config = config || null
        this.editor = editor
        this.initToolbars()
    }

    append(child: HTMLElement) {
        this.element.appendChild(child)
    }

    initToolbars() {
        if (!this.config || !this.config.tools) {
            return
        }
        this.config?.tools.forEach(element => {
            switch (element.name) {
                case "header":
                    const header = new Header(this.editor).element;
                    this.append(header)
                    break;
                case "bold":
                    const bold = new Bold(this.editor).element;
                    this.append(bold)
                    break;
                case "italic":
                    const italic = new TextItalic(this.editor).element;
                    this.append(italic)
                    break;
                case "quote":
                    const quote = new Quote(this.editor).element;
                    this.append(quote)
                    break;
                case "linkOne":
                    const linkOne = new LinkOne(this.editor).element;
                    this.append(linkOne)
                    break;
                case "code":
                    const code = new Code(this.editor).element;
                    this.append(code)
                    break;
                    
                case "codeBrackets":
                    const codeBrackets = new CodeBrackets(this.editor).element;
                    this.append(codeBrackets)
                    break;
                case "listTwo":
                    const listTwo = new ListTwo(this.editor).element;
                    this.append(listTwo)
                    break;
                    
                case "orderedList":
                    const orderedList = new OrderedList(this.editor).element;
                    this.append(orderedList)
                    break;
                default:
                    break;
            }
        });
        this.addEventListener()
    }

    addEventListener() {
        this.element.addEventListener("click", (e) => {
        })
    }
}

