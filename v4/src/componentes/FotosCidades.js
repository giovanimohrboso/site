class FotosCidades extends HTMLElement{

    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","foto-cidade");

        const linkCidade      =  document.createElement("a");
        linkCidade.href       = this.getAttribute("url-link")
        
        const foto             = document.createElement("img");
        foto.src               = this.getAttribute("foto");

        const texto            = document.createElement("p");
        texto.textContent      = this.getAttribute("texto");

        linkCidade.appendChild(foto);
        linkCidade.appendChild(texto);

        componentRoot.appendChild(linkCidade);

     //   if(this.hasOwnProperty('como-chegar')){
            const menus = document.createElement("div");
            menus.setAttribute("class","menus")
            componentRoot.appendChild(menus);
    //        if(this.getAttribute("como-chegar") != ""){
                const comoChegar = document.createElement("a");
                comoChegar.setAttribute("class","menu")
                comoChegar.href = this.getAttribute("como-chegar");
                comoChegar.target = "_blank";

                const imgComoChegar = document.createElement("img");
                imgComoChegar.src = "../../imagens/como-chegar.png"
                
                comoChegar.appendChild(imgComoChegar);
                menus.appendChild(comoChegar);
    //        }
    //        if(this.getAttribute("link-externo") != ""){
                const linkExterno = document.createElement("a");
                linkExterno.setAttribute("class","menu");
                linkExterno.href = this.getAttribute("link-externo");
                linkExterno.target = "_blank";

                const imagemLink = document.createElement("img");
                imagemLink.src = "../../imagens/link-externo.png"

                linkExterno.appendChild(imagemLink);
                menus.appendChild(linkExterno);
    //        }
    //    }

        return componentRoot;
    }

    styles(){
        const estilo = document.createElement("style");

        estilo.textContent = `

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        div.foto-cidade {
            width: 320px;
            height: 600px;
            border: 2px solid var(--cor4);
            border-radius: 10px;
            margin: 15px;
            text-decoration: none;
            font-size: 0.8em;
        }
        
        div.foto-cidade img {
            position: relative;
            padding: 5px;
            margin: 2px;
            width: 312px;
            height: 420px;
            border-radius: 9px;
            background-color: var(--cor1);
        }
        
        div.foto-cidade > a{
            width: 320px;
            height: 100px;
            margin: 0px;
            padding: 0px;
        }
        
        div.foto-cidade p{
            padding: 2px 8px 0px 8px;
            color: var(--cor5);
            text-align: justify;
            text-decoration: none;
        }
        
        div.menus {
            position: relative;
            width: 50px;
            height: 50px;
            display: inline;
            float: inline;
        
        }
        
        div.menus img {
            width: 40px;
            height: 40px;
            display: inline;
            margin-top: 0px;
            border-radius: 5px;
            
        }
        
        div.menus p{
            position: relative;
            display: inline;
            top:-15px;
            text-decoration: none;
            font-size: 1em;
            font-weight: bold;
        }
        
        a {
            text-decoration: none;
        }
        
        
        
        @media (min-width:1000px){
        
            div.foto-cidade:hover {
                transform: scale(1.1);
            }
        }
        
        @media (max-width:450px){
            a.foto-cidade{
                height: 590px;
            }
            div#detalhe-historia p{
                margin: 5px;
                text-align: justify;
                text-indent: 10px;
                font-size: 0.9em;
            }
        }


        `

        return estilo;

    }

}

customElements.define('fotos-cidades',FotosCidades);