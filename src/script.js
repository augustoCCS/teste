document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('downloadButton');
    const videoUrlInput = document.getElementById('videoUrl');

    downloadButton.addEventListener('click', function () {
        const videoUrl = videoUrlInput.value;
        if (videoUrl.trim() === '') {
            alert('Por favor, insira uma URL válida.');
            return;
        }

        // Simulação de sucesso ao fazer o download do vídeo.
        alert('Sucesso ao fazer o download do vídeo!');
    });
});
