
import MNode, { NodeType } from "./node";
export class TableTdNode extends MNode {
    
  readonly isContainer = true;
  readonly isBlockContainer = false;
  readonly canContainText = true;
  readonly isParagraph = true;
  align: string = '';

  constructor (sourceStart: number, align: string = 'left') {
    super(sourceStart);
    this.type = NodeType.TableTd;
    this.align = align;
  }

  // @Override
  continue (currentLine: string, offset: number, column: number) {
    let continueResult: any = null;
    return continueResult;
  }
    
  // @Override
  // finalize() {
  //   super.finalize();
  // }

  // @Override
  // canContain(mnode: MNode) {
  //   return false;
  // }
}
export default TableTdNode;