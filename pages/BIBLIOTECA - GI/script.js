document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const searchInput = document.getElementById('search');
    const songsContainer = document.getElementById('songs-container');
    const prevAndNextContainer = document.getElementById('prev-and-next-container');

    const API_OPTIONS = {
        primary: {
            url: 'https://api.deezer.com/search/album?q=',
            proxy: 'https://api.allorigins.win/get?url='
        },
        fallback: {
            url: 'https://itunes.apple.com/search?entity=album&term=',
            proxy: ''
        }
    };

    let currentPage = 0;
    let totalResults = 0;
    const itemsPerPage = 10;
    let currentSearchTerm = '';
    let currentApi = API_OPTIONS.primary;


    function manageFocus(element) {
        if (element) {
            element.focus();
        } else {
            searchInput.focus();
        }
    }

    async function fetchAlbums(searchTerm, index = 0) {
        try {
            showLoading();

            const apiUrl = `${currentApi.url}${encodeURIComponent(searchTerm)}&offset=${index}`;
            const requestUrl = currentApi.proxy ? `${currentApi.proxy}${encodeURIComponent(apiUrl)}` : apiUrl;

            const response = await fetch(requestUrl);

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const data = currentApi.proxy ? await response.json().then(res => JSON.parse(res.contents)) : await response.json();

            if (!data.results && !data.data) {
                throw new Error('Formato de dados inesperado');
            }

            processApiResponse(data, index);
            manageFocus(songsContainer.firstElementChild);

        } catch (error) {
            console.error('Erro na API:', error);
            handleApiError(error);
        }
    }

    function showLoading() {
        songsContainer.innerHTML = '<li class="loading" aria-live="polite">Buscando álbuns...</li>';
        prevAndNextContainer.innerHTML = '';
    }

    function processApiResponse(data, index) {
        const albums = data.data || data.results;
        totalResults = data.total || data.resultCount;

        if (!albums || albums.length === 0) {
            throw new Error('Nenhum álbum encontrado');
        }

        displayAlbums(albums);
        updatePaginationControls(index);
    }

    function handleApiError(error) {
        if (currentApi === API_OPTIONS.primary) {
            currentApi = API_OPTIONS.fallback;
            fetchAlbums(currentSearchTerm, currentPage);
        } else {
            songsContainer.innerHTML = `
                <li class="warning-message" aria-live="assertive">
                    Falha na conexão. Erro: ${error.message}<br>
                    Tente novamente mais tarde
                </li>
            `;
            prevAndNextContainer.innerHTML = '';
            manageFocus(searchInput);
        }
    }

    function displayAlbums(albums) {
        songsContainer.innerHTML = albums.map(album => `
            <li class="song" aria-label="Álbum ${album.title || album.collectionName} de ${album.artist?.name || album.artistName}">
                <div class="song-info">
                    <img src="${album.cover_medium || album.artworkUrl100.replace('100x100', '300x300')}" 
                         alt="Capa do álbum ${album.title || album.collectionName}" 
                         width="80" height="80">
                    <div>
                        <span class="song-artist">${album.artist?.name || album.artistName}</span>
                        <h3>${album.title || album.collectionName}</h3>
                    </div>
                </div>
                <a href="${album.link || album.collectionViewUrl}" 
                   target="_blank" 
                   class="deezer-link"
                   aria-label="Ouvir ${album.title || album.collectionName} no ${currentApi === API_OPTIONS.primary ? 'Deezer' : 'iTunes'}">
                   ${currentApi === API_OPTIONS.primary ? 'Ouvir no Deezer' : 'Ver no iTunes'}
                </a>
            </li>
        `).join('');
    }

    function updatePaginationControls(index) {
        const totalPages = Math.ceil(totalResults / itemsPerPage);
        const currentPageNumber = Math.floor(index / itemsPerPage) + 1;

        prevAndNextContainer.innerHTML = `
            <button ${index === 0 ? 'disabled aria-disabled="true"' : ''} 
                    onclick="goToPage(${index - itemsPerPage})"
                    aria-label="Página anterior">
                Anterior
            </button>
            <span aria-live="polite">Página ${currentPageNumber} de ${totalPages}</span>
            <button ${index + itemsPerPage >= totalResults ? 'disabled aria-disabled="true"' : ''} 
                    onclick="goToPage(${index + itemsPerPage})"
                    aria-label="Próxima página">
                Próxima
            </button>
        `;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        currentSearchTerm = searchInput.value.trim();
        currentApi = API_OPTIONS.primary;

        if (currentSearchTerm) {
            currentPage = 0;
            fetchAlbums(currentSearchTerm, currentPage);
        } else {
            songsContainer.innerHTML = '<li class="warning-message" aria-live="assertive">Digite um artista para buscar</li>';
            prevAndNextContainer.innerHTML = '';
            manageFocus(searchInput);
        }
    });

    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            form.dispatchEvent(new Event('submit'));
        }
    });

    window.goToPage = function (index) {
        if (index >= 0 && index < totalResults) {
            currentPage = index;
            fetchAlbums(currentSearchTerm, currentPage);
        }
    };
});