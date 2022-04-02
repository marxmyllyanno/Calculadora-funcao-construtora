function Calculadora(){
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.caputraCliques()
        this.caputraEnter()
    }

    this.caputraEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return
            this.realizaConta()
        })
    }

    this.caputraCliques = () =>{
        document.addEventListener('click', event =>{
            const el = event.target
            if (el.classList.contains('btn-num')) this.addNumDisplay(el)
            if (el.classList.contains('btn-clear')) this.clear()
            if (el.classList.contains('btn-del')) this.del()
            if (el.classList.contains('btn-eq')) this.realizaConta()
        })
    }

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value)

            if (!conta) {
                alert('Conta inválida')
                return
            }

            this.display.value = conta

        } catch(e){
            alert('conta inválida')
            return
        }
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }
    this.clear = ()=> this.display.value = ''
/*     
    this.clear = function() {
        this.display.value = ''
    } 
*/
    this.del = () => this.display.value = this.display.value.slice(0, -1)

}

const calculadora = new Calculadora()
calculadora.inicia()