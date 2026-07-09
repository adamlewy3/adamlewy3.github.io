let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if(lightmode ==="active") enableDarkmode()

themeSwitch.addEventListener("click", () =>{
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableDarkmode(): disableDarkmode()
})