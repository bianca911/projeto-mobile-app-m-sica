document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('music-container');
    const loading = document.querySelector('.loading');
    const errorMsg = document.querySelector('.error-message');
    const musicSource = document.getElementById('music-source');


    const config = {
        daftpunk: {
            albumIds: ['302127'] 
        },
        rock: {
            albumIds: ['119606', '6891501'] 
        },
        pop: {
            albumIds: ['657308', '126298532'] 
        }
    };

    async function loadMusic(source) {
        try {
            loading.style.display = 'block';
            errorMsg.style.display = 'none';
            container.innerHTML = '';

            let tracks = [];
            
            if (source === 'custom') {
                displayTracks(customTracks);
                return;
            } else if (source === 'random') {
                const randomSources = ['daftpunk', 'rock', 'pop'];
                source = randomSources[Math.floor(Math.random() * randomSources.length)];
            }

            const albumIds = config[source]?.albumIds || ['302127'];
            tracks = await fetchMultipleAlbums(albumIds);
            displayTracks(tracks.slice(0, 2));
            
        } catch (error) {
            console.error('Erro:', error);
            errorMsg.textContent = `Erro ao carregar músicas. ${error.message}`;
            showDefaultContent();
        } finally {
            loading.style.display = 'none';
            errorMsg.style.display = errorMsg.textContent ? 'block' : 'none';
        }
    }


    async function fetchMultipleAlbums(albumIds) {
        const promises = albumIds.map(async (albumId) => {
            const apiUrl = `https://api.deezer.com/album/${albumId}`;
            const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;
            const response = await fetch(proxyUrl);
            const data = await response.json();
            return data.tracks?.data || [];
        });
        
        const albums = await Promise.all(promises);
        return albums.flat();
    }


    function displayTracks(tracks) {
        if (!tracks || !tracks.length) {
            throw new Error('Nenhuma música encontrada');
        }
        
        container.innerHTML = tracks.map(track => `
            <li class="discovery-item">
                <div class="musica">
                    <img src="${track.album?.cover_medium || './assets/default-music.png'}" 
                         alt="${track.title || 'Música desconhecida'}" 
                         onerror="this.src='./assets/default-music.png'">
                </div>
                <div class="music-infor">
                    <div class="music-titulo">${track.title_short || track.title || 'Título desconhecido'}</div>
                    <div class="music-art">${track.artist?.name || 'Artista desconhecido'}</div>
                </div>
            </li>
        `).join('');
    }

    
    musicSource.addEventListener('change', (e) => {
        loadMusic(e.target.value);
    });


    loadMusic('daftpunk');
});

document.querySelectorAll('h2').forEach(h2 => {
  h2.style.color = 'white';
});