import { createElement } from "react";
import VanillaWrapper from "./vanillaWrapper"

const initiator = (wrapper:HTMLDivElement)=>{
  let state = false;
  const pElem = document.createElement('p')
  pElem.textContent = 'off'
  const btnElem = document.createElement('button')
  btnElem.textContent='toggle'
  btnElem.addEventListener('click',()=>{
    state =!state
    pElem.textContent =state?'on':'off'
  })

  const divElem = document.createElement('div')
  divElem.textContent="Test-2 Vanilla"
  divElem.append(btnElem,pElem)
  wrapper.insertAdjacentElement('beforeend',divElem)

}

const Test2_Vanilla= ()=><VanillaWrapper initiator={initiator}/>
export default Test2_Vanilla