
// CONNECT WITH THE QR CODE API 

const generateButton = document.querySelector('#generateQrCode')
let qrCodeContent    = document.querySelector('#qrCodeContent')
let qrCodeDiv        = document.querySelector('#qrCodeDiv')
let imageSpace       = qrCodeDiv.querySelector('img')




function functionToGenerate() {

    imageSpace.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeContent.value}`

    qrCodeContent.value = ''


}





generateButton.addEventListener('click',functionToGenerate)