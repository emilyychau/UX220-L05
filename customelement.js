class EmilyElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Emily wuz here";
    }
}

customElements.define("x-emily", EmilyElement);

//

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`<div style="text-align: center">${this.innerHTML}</div>`;
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

class MaroonElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `<div style="color:DarkRed; text-align:center; font-family: Roboto, sans-serif;">${this.innerHTML}</div>`;
    }
}

customElements.define("x-maroon", MaroonElement);

//