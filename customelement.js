class EmilyElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Emily wuz here";
    }
}

customElements.define("x-emily", EmilyElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", CenterElement);