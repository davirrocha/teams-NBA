let east = document.querySelector(".east")
let west = document.querySelector(".west")
let eastList = ''
let westList = ''


eastOptions.forEach(item => {
    eastList += `
        <li>
            <a href="${item.link}" target="_blank">
            <img src="${item.img}" class="img-teams">
             </a>
        </li>
        `
    east.innerHTML = eastList
})


westOptions.forEach(item => {
    westList += `
        <li>
            <a href="${item.link}" target="_blank">
            <img src="${item.img}" class="img-teams">
            </a>
        </li>
    `
    west.innerHTML = westList
})