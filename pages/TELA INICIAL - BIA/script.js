document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('music-container');
    const loading = document.querySelector('.loading');
    const errorMsg = document.querySelector('.error-message');


    async function fetchTopTracks() {
        try {

            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const apiUrl = 'https://api.deezer.com/artist/27/top?limit=2';

            const response = await fetch(proxyUrl + apiUrl, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            if (!response.ok) throw new Error('API não disponível');

            const data = await response.json();

            if (data.error) throw new Error(data.error.message);

            displayTracks(data.data);
            loading.style.display = 'none';

        } catch (error) {
            console.error('Erro:', error);
            loading.style.display = 'none';
            errorMsg.textContent = 'Não foi possível carregar as descobertas. Mostrando recomendações padrão.';
            errorMsg.style.display = 'block';
            showDefaultContent();
        }
    }

    function displayTracks(tracks) {
        container.innerHTML = tracks.map(track => `
            <li class="discovery-item">
                <div class="musica">
                    <img src="${track.album.cover_medium}" alt="${track.title}" onerror="this.src='./assets/default-music.png'">
                </div>
                <div class="music-infor">
                    <div class="music-titulo">${track.title_short}</div>
                    <div class="music-art">${track.artist.name}</div>
                </div>
            </li>
        `).join('');
    }

    function showDefaultContent() {
        container.innerHTML = `
            <li class="discovery-item">
                <div class="musica">
                    <img src="./assets/mount eerie by the microphones (2003) 1.png" alt="Mount Eerie">
                </div>
                <div class="music-infor">
                    <div class="music-titulo">Mount Eerie</div>
                    <div class="music-art">The Microphones</div>
                </div>
            </li>
            <li class="discovery-item">
                <div class="musica">
                    <img src="./assets/X's - Cigarettes After Sex 1.png" alt="X's">
                </div>
                <div class="music-infor">
                    <div class="music-titulo">X's</div>
                    <div class="music-art">Cigarettes After Sex</div>
                </div>
            </li>
        `;
    }

    fetchTopTracks();
});


document.querySelectorAll('h2').forEach(h2 => {
  h2.style.color = 'white';
});