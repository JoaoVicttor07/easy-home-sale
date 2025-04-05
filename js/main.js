fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById('opportunities-container');
    data.forEach((property, index) => {
      const card = document.createElement('div');
      card.classList.add('opportunity-card');
      card.innerHTML = `
        <img class="property-img" src="${property.image}" alt="Imagem do imóvel ${index + 1}" />
        <p class="property-price">${property.price}</p>
        <p class="property-size">${property.size} m²</p>
        <div class="property-details">
          <p class="property-bedrooms">${property.bedrooms} quartos</p>
          <p class="property-bathrooms">${property.bathrooms} banheiros</p>
        </div>
          
        
      `;
      card.addEventListener('click', () => openModal(property));
      container.appendChild(card);
    });
  });


function openModal(property) {
  const modal = document.getElementById('property-modal');
  document.getElementById('modal-image').src = property.image;
  document.getElementById('modal-price').textContent = property.price;
  document.getElementById('modal-size').textContent = `${property.size} m²`;
  document.getElementById('modal-bedrooms').textContent = `${property.bedrooms} quartos`;
  document.getElementById('modal-bathrooms').textContent = `${property.bathrooms} banheiros`;
  modal.classList.remove('hidden');
}

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('property-modal').classList.add('hidden');
});


document.getElementById('scroll-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.getElementById('logout').addEventListener('click', () => {
  window.location.href = 'index.html';
});