// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
// })

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Produto cadastrado com sucesso!', 'success')
    })
}

// ------------------------------------------------------------------------
const alertDeletePlaceholder = document.getElementById('deleteAlertPlaceholder')

const alertDelete = (message, type) => {
    const wrapperDelete = document.createElement('div')
    wrapperDelete.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertDeletePlaceholder.append(wrapperDelete)
}

const alertTriggerDelete1 = document.querySelector('.delete1')
if (alertTriggerDelete1) {
    alertTriggerDelete1.addEventListener('click', () => {
        alertDelete('Produto deletado com sucesso!', 'success')
    })
}
const alertTriggerDelete2 = document.querySelector('.delete2')
if (alertTriggerDelete2) {
    alertTriggerDelete2.addEventListener('click', () => {
        alertDelete('Produto deletado com sucesso!', 'success')
    })
}
const alertTriggerDelete3 = document.querySelector('.delete3')
if (alertTriggerDelete3) {
    alertTriggerDelete3.addEventListener('click', () => {
        alertDelete('Produto deletado com sucesso!', 'success')
    })
}