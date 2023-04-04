import { Editor, EditorViewMode, withUndoRedo } from "../src";
import { Bold } from "../src/toolbars/bold";
import { Toolbars } from "../src/toolbars/toolbars";
import { text } from "./text";
const container = document.getElementById('myEditor');
const toolbars = document.getElementById('toolbars');

let editor: Editor;
if (container) {
  // editor = new Editor(container, { placeholder: 'Please input your texts'})
  editor = withUndoRedo(new Editor(container, { placeholder: 'Please input your texts'}));
  // editor.insertTextAtCursor(text);
  // console.log('all contents', editor.getContent());
  const btns = document.getElementsByClassName('mode-btn');
  window['changeMode'] = (n: number) => {
    for (let i = 0; i < btns.length; i++) {
      btns[i].setAttribute('class', 'mode-btn');
    }
    btns[n - 1].setAttribute('class', 'mode-btn curr');
    switch (n) {
      case 1: editor.switchViewMode(EditorViewMode.RENDER);break;
      case 2: editor.switchViewMode(EditorViewMode.SOURCE_AND_PREVIEW);break;
      case 3: editor.switchViewMode(EditorViewMode.SOURCE);break;
      case 4: editor.switchViewMode(EditorViewMode.PREVIEW);break;
      default: editor.switchViewMode(EditorViewMode.RENDER);break;
    }
  }
  window["get1"] = () => {
    console.log("编辑器所有内容",editor.getContent().split('\n'));
    console.log("当前选区内容",editor.getSelectionModel());
    console.log("当前行内容",editor.getTextModel());
    console.log("当前行",editor.getLineModel());
    
  }
  const toolbars = new Toolbars(editor,{
    tools: [{
      name: "bold"
    },{
      name: "header"
    },{
      name: "italic"
    },{
      name: "code"
    },{
      name: "quote"
    },{
      name: "linkOne"
    },{
      name: "codeBrackets"
    },{
      name: "listTwo"
    },{
      name: "orderedList"
    }]
  })
  document.getElementById("toolbars")?.appendChild(toolbars.element)
  // window['changeMode'](1);
}