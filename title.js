const postFrame = document.querySelector('#post')
let postTitle = postFrame.contentWindow.document.title
document.title = document.title + " | " + postTitle

let titleEl = postFrame.contentWindow.document.createElement("h1")
titleEl.style.marginBottom = "5rem"
titleEl.textContent = postTitle
postFrame.contentWindow.document.body.prepend(titleEl)
