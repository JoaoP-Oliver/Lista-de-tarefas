      function tsx() {
        let request = document.getElementById('tarefa').value;

        const div = document.createElement('div');
        div.setAttribute('class', 'res')
        div.innerHTML = `
        ${request}

        <button id="trash" onclick="removeDiv()"> Apagar </button>
        `;
        
        if(request === "") {
          window.alert('Digite alguma coisa')

          return
        }

        const body = document.querySelector('body');
        body.append(div)
      }

      function removeDiv() {
        const res = document.querySelector('res')

        res.remove()
      }
