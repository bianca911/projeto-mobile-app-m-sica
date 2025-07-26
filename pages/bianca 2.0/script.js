
        document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('music-container');
    
    try {
 
        const response = await fetch('https://api.allorigins.win/get?url=' + 
            encodeURIComponent('https://api.deezer.com/chart/0/tracks?limit=2'));
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        const tracks = JSON.parse(data.contents).data;
        

        container.innerHTML = '';
        
        tracks.forEach(track => {
            const musicItem = document.createElement('div');
            musicItem.className = 'discovery-item';
            musicItem.innerHTML = `
                <div class="musica">
                    <img src="${track.album.cover_medium}" 
                         alt="Capa do álbum ${track.album.title}"
                         onerror="this.src='./assets/default-album.png'">
                </div>
                <div class="music-infor">
                    <div class="music-titulo">${track.title}</div>
                    <div class="music-art">${track.artist.name}</div>
                    <audio controls src="${track.preview}"></audio>
                </div>
            `;
            container.appendChild(musicItem);
        });
        
    } catch (error) {
        console.error('Erro ao carregar músicas:', error);
        container.innerHTML = `
            <div class="error">
                Não foi possível carregar as músicas.
                <button onclick="window.location.reload()">Tentar novamente</button>
            </div>
        `;
    }
});