# 
## Readme
<a href="https://cezardev07.github.io/tratando-erro-JS/">Link web do projeto</a>
<ul>
    <li>
        <p>
            Consumindo api <strong>fake</strong>, e tratando erro com requisição assincronas
        </p>
    </li>
</ul>

<h1 align="center"> Tratando erro com JavaScript, consumindo uma api fake</h1>

<p align="center">
 projeto criado com foco em estudar requisição assincronas http com javascript<br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


<br>

<h2>Forçando um possivel "erro"!⤵️</h2>
 
```js

const App = function(){
    const get = async function(){
      try {
          const res = await fetch("./backend/FakeApi.json")
          //forçando um possivel "erro"!👆⤴️
          const data = await res.json() 

          return data
      } catch (error) { 
          // 🛠️ tratando um possivel "erro", e mostrando para o usuario! ⤵️🔃
          console.log(error)
          //...⤵️
      }
   }
   //...
}

```

<h2>✅ Caso se não de "error", crie um h1 e atribua os dados da api fake e mostre para o usuario! ("Hello World")🔄️🆗</h2>

```js
const App = function(){
     //✅ se não de "error" crie um h1 e atribua os dados da api fake e mostre para o usuario! 🔄️🆗
    const user = async function(){
        const data = await get()
        console.log(data)

        const HelloWorld = document.createElement("h1")
            
            HelloWorld.innerHTML = data[0].title
        
        body.appendChild(HelloWorld)

        if(bolleanError === false){
            const removeLoad = document.querySelector(".cont-spinne")
                removeLoad.remove()
        }
    }

    return user()
}

```

<h2>📌 Para mostrar os dados ("Hello World") para o usuario, basta remover o comentario❌</h2>

```js

const App = function(){
    const get = async function(){
      try {
          //const res = await fetch("./backend/FakeApi.json")
          //forçando um possivel "erro"!👆⤴️
          const data = await res.json() 

          return data
      }
   }
   
   //======================================================
   
   const get = async function(){
      try {
          const res = await fetch("./backend/FakeApi.json")
          //forçando um possivel "erro"!👆⤴️
          const data = await res.json() 

          return data
      }
   }
   //...
}

```

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- Git e Github

## 🔖 Layout

Você pode acessar o projeto através [DESSE LINK](https://cezardev07.github.io/tratando-erro-JS/)
♥
🎧 create by cezardev07 ❤️
