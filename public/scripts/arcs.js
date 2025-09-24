const renderArcs = async () =>{
    const response = await fetch('/arcs');
    const data = await response.json();
    const mainContent = document.querySelector('.main-content');
    if(data){
        data.map(arc => {
            const card = document.createElement('div');
            card.classList.add('card');
            const topContainer = document.createElement('div');
            topContainer.classList.add('top-container');
            const bottomContainer = document.createElement('div');
            bottomContainer.classList.add('bottom-container');
            topContainer.style.backgroundImage = `url(${arc.image})`;
            const title = document.createElement('h3');
            title.textContent = (`${arc.title}`);
            bottomContainer.appendChild(title);
            const author = document.createElement('p');
            author.textContent = (`Author: ${arc.author}`);
            bottomContainer.appendChild(author);
            const link = document.createElement('a');
            link.textContent = "Read More";
            link.setAttribute('role', 'button');
            link.href = `/arc.html?id=${arc.id}`;
            bottomContainer.appendChild(link);
            card.appendChild(topContainer);
            card.appendChild(bottomContainer);
            mainContent.appendChild(card);
        })
    }
    else{
        const message = document.createElement('h2');
        message.textContent = "No stories available 😞"
        mainContent.appendChild(message);
    }
}

renderArcs();