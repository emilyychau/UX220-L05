class EmilyElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Emily wuz here";
    }
}

customElements.define("x-emily", EmilyElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ``;
    }
}

customElements.define("x-center", CenterElement);