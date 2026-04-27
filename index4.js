let secretMessageTextAreaInput=document.querySelector('#secretMessageTextArea')
let secretLinkGenerateButton = document.querySelector('#secretLinkGenerateButton')
let showSecretLinkBox = document.querySelector('#showSecretLinkBox')
let showMessagebox=document.querySelector('#showMessagebox')
let currentUrl = window.origin + window.location.pathname


secretLinkGenerateButton.addEventListener('click', () => {
  let secretMessage=secretMessageTextAreaInput.value.trim()
    if (secretMessage===''){
        alert('Please enter secret message')
        return
    }
    let secretLink=`${currentUrl}?secret=${encodeMessage(secretMessage)}`

    showSecretLinkBox.innerText=secretLink
})

function encodeMessage(message) {
    return btoa(encodeURIComponent(message))
}

function decodeMessage(encodedMessage) {
    return decodeURIComponent(atob(encodedMessage))
}

let urlParams = new URLSearchParams(window.location.search)
let secretParam = urlParams.get('secret')
if (secretParam){
    let decodedMessage = decodeMessage(secretParam)
    showMessagebox.innerText=decodedMessage;
}

