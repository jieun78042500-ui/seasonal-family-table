'use client';
export default function PrintButton(){return <button className="button ghost no-print" onClick={()=>window.print()}>인쇄 · PDF 저장</button>}
