function tsx() {
    let request = document.getElementById('tarefa').value;
    const div = document.createElement('div');
    div.setAttribute('class', 'res')
    div.innerHTML = `${request}`;
    

    const body = document.querySelector('body');
    body.append(div)
}
