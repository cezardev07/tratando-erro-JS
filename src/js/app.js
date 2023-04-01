const body = document.querySelector("body")

let bolleanError = false

const App = function(){

    const get = async function(){
        try {
            //const res = await fetch("./backend/FakeApi.json")
            //forçando um possivel "erro"!👆⤴️
            const data = await res.json() 

            return data
        } catch (error) { 
            // 🛠️ tratando um possivel "erro", e mostrando para o usuario! ⤵️🔃
            console.log(error)

            const span = document.createElement("span")
            const spinne = document.createElement("div")
            const contSpinne = document.createElement("div")

                span.innerHTML = `${error}`
                body.style.cursor = "progress"
                spinne.classList.add("spinne")
                contSpinne.classList.add("cont-spinne")
            
            body.appendChild(contSpinne)
            contSpinne.appendChild(span)
            contSpinne.appendChild(spinne)

            bolleanError = true
        }
    }

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

App()