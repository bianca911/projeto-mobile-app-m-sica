document.addEventListener('DOMContentLoaded', function() {
    // Elemento onde as informações serão exibidas
    const artistInfo = document.getElementById('artistInfo');
    
    // Elementos para preencher com os dados
    const artistName = document.getElementById('artistName');
    const artistImage = document.getElementById('artistImage');
    const artistFans = document.getElementById('artistFans');
    const artistAlbums = document.getElementById('artistAlbums');
    const artistLink = document.getElementById('artistLink');
    
    // IDs dos artistas na Deezer
    const artistIds = {
        ladyGaga: 139,
        mitski: 6979064,
        sabrina: 5313805
    };
    
    // URLs dos artistas na Deezer (como fallback)
    const artistUrls = {
        ladyGaga: "https://www.deezer.com/br/artist/75491",
        mitski: "https://www.deezer.com/br/artist/6630050",
        sabrina: "https://www.deezer.com/br/artist/1176900"
    };
    
    // Adiciona eventos de clique para cada artista
    document.getElementById('ladyGagaImg').addEventListener('click', () => {
        fetchArtistData(artistIds.ladyGaga, "Lady Gaga", artistUrls.ladyGaga);
    });
    
    document.getElementById('mitskiImg').addEventListener('click', () => {
        fetchArtistData(artistIds.mitski, "Mitski", artistUrls.mitski);
    });
    
    document.getElementById('sabrinaImg').addEventListener('click', () => {
        fetchArtistData(artistIds.sabrina, "Sabrina Carpenter", artistUrls.sabrina);
    });
    
    // Função para buscar dados do artista
    function fetchArtistData(artistId, displayName, artistUrl) {
        // Mostra mensagem de carregamento
        artistName.textContent = "Carregando " + displayName + "...";
        artistInfo.style.display = 'block';
        
        // Primeiro tenta com o proxy CORS
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição com proxy');
                }
                return response.json();
            })
            .then(data => {
                // Preenche os dados do artista
                updateArtistInfo(data, displayName, artistUrl);
            })
            .catch(error => {
                console.error('Erro com proxy:', error);
                // Se falhar com proxy, tenta direto (pode falhar por CORS)
                fetch(`https://api.deezer.com/artist/${artistId}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erro na requisição direta');
                        }
                        return response.json();
                    })
                    .then(data => {
                        updateArtistInfo(data, displayName, artistUrl);
                    })
                    .catch(error => {
                        console.error('Erro direto:', error);
                        // Se tudo falhar, mostra informações mínimas
                        showFallbackInfo(displayName, artistUrl);
                    });
            });
    }
    
    function updateArtistInfo(data, displayName, artistUrl) {
        artistName.textContent = displayName;
        artistImage.src = data.picture_big || data.picture || "https://via.placeholder.com/150";
        artistFans.textContent = data.nb_fan ? data.nb_fan.toLocaleString() : "N/A";
        artistAlbums.textContent = data.nb_album || "N/A";
        artistLink.href = data.link || artistUrl;
        artistLink.textContent = "Ver no Deezer";
        artistLink.onclick = null; // Remove qualquer redirecionamento anterior
        
        // Rola para a seção de informações
        artistInfo.scrollIntoView({ behavior: 'smooth' });
    }
    
    function showFallbackInfo(displayName, artistUrl) {
        artistName.textContent = displayName;
        artistImage.src = "https://via.placeholder.com/150";
        artistFans.textContent = "N/A";
        artistAlbums.textContent = "N/A";
        artistLink.href = artistUrl;
        artistLink.textContent = "Ver no Deezer (redirecionando...)";
        
        // Configura o link para redirecionar após 3 segundos
        artistLink.onclick = function(e) {
            e.preventDefault();
            setTimeout(() => {
                window.open(artistUrl, '_blank');
            }, 3000);
            return false;
        };
        
        // Mostra alerta mais informativo
        alert(`Não foi possível carregar todos os dados de ${displayName}. Clique em "Ver no Deezer" para ser redirecionado ao perfil oficial.`);
        
        artistInfo.scrollIntoView({ behavior: 'smooth' });
    }
});