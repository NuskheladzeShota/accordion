document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll('.accordionItem')

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordionHeader')
        const content = item.querySelector('.accordionContent')

        header.addEventListener("click", () => {
            const isOpen = item.classList.contains('open')

            accordionItems.forEach(item => {
                item.classList.remove("open")
                item.querySelector(".accordionContent").style.display = "none"
            })

            if (!isOpen) {
                item.classList.add("open")
                content.style.display = ("block")
            }
        })
    })
})