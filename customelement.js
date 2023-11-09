class EmilyElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Emily wuz here";
    }
}

customElements.define("x-emily", EmilyElement);

//

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`<div style="text-align: center; color: black">${this.innerHTML}</div>`;
    }
}
customElements.define("x-center", CenterElement);

//

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);

//

class FooterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align: center; font-family: 'Roboto'; colour: DarkRed">${this.innerHTML}</div>`;
    }
}

customElements.define("x-footerformat", FooterElement);

//