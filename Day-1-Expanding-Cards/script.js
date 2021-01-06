// Grabs all the classes of panel in variable
const panels = document.querySelectorAll('.panel')

//loops through each panel in the NodeList
panels.forEach((panel) => {
    //on click listener
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

//remove active class from panel
function removeActiveClasses(){
    panels.forEach((panel)=> {
        panel.classList.remove('active')
    })
}