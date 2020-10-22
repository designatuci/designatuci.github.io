function ready() {

    
    const articleContainer = document.getElementById("-articles")
    for (i in DATA_HERO.articles) {
        const article = DATA_HERO.articles[i]

        const elementHTML = `
        <a class="article" href="${article.link}">
            <div>
                <div class="img" style="background-image:url(/img/${article.img});"><div></div></div>
            </div>
            <div class="info">
                <div class="caption">${article.caption}</div>
                <div class="title">${article.title}</div>
            </div>
        </a>`

        // var element = document.createElement("a")
        // element.innerHTML = elementHTML
        articleContainer.insertAdjacentHTML("afterbegin", elementHTML)

    }


}