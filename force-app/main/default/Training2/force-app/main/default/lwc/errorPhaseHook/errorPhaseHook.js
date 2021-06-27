import { LightningElement } from 'lwc';

export default class errorPhaseHook extends LightningElement {
    isChildVisible = false
    constructor(){ 
        super()
        console.log("parent constructor called")
    }
    connectedCallback(){ 
        console.log("parent connectedCallback called")
    }
    renderedCallback(){ 
        console.log("parent renderedCallback called")
    }

    handleClick(){ 
        this.isChildVisible = !this.isChildVisible
    }

    errorCallback(error, stack){ 
        console.log(error.message)
        console.log(stack)
    }
}