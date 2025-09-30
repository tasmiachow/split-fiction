async function renderArcDetails() {
  
  const params = new URLSearchParams(window.location.search);
  const arcId = params.get('id');
  if (!arcId) {
    document.getElementById('title').textContent = 'No arc selected';
    return;
  }

  const res = await fetch(`/arcs/${arcId}`);
  if (!res.ok) {
    document.getElementById('title').textContent = 'Arc not found 😞';
    return;
  }

  const arc = await res.json();
  document.getElementById('title').textContent = arc.title;
  document.getElementById('type').textContent = arc.type;
  document.getElementById('author').textContent = `Author: ${arc.author}`;
  const background = document.querySelector('.arc-details');
  if (background) {
      background.style.backgroundImage = `url(${arc.image})`;
      
      background.style.backgroundSize = 'cover';
      background.style.backgroundPosition = 'center';
    }

};

document.addEventListener('DOMContentLoaded', renderArcDetails);

renderArcDetails();