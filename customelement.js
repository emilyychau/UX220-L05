class EmilyElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Emily wuz here";
    }
}

customElements.define("x-Emily", EmilyElement);