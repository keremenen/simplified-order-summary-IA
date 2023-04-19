/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'
import '../styles/summary-component.scss'
import '../styles/button-component.scss'

const paymentBtn = document.querySelector('#payment-procced-btn');
const loader = document.createElement('span')

const sayHello = (e) => {
    paymentBtn.innerHTML = ''
    loader.classList.add('button-component__loader')
    paymentBtn.appendChild(loader)
}
paymentBtn.addEventListener(
    "click",
    sayHello
)