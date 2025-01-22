let stato = 0;

    function handleButtonClick() {
        const button = document.getElementById('actionButton');
        const message = document.getElementById('message');
        const canvas = document.getElementById('drawingCanvas');
        const ctx = canvas.getContext('2d');

        if (stato === 0) {
            message.textContent = 'PEPPEREPE'; 
            button.textContent = 'Nuova sorpresa';
            button.color = 'yellow'
            stato = 1;
        } else if (stato === 1) {
            alert('TADAAAA!');
            button.textContent = 'E ora un bel disegno';
            stato = 2;
        } else if (stato === 2) {
            canvas.classList.remove('hidden');
            ctx.fillStyle = 'aqua';
            ctx.fillRect(40, 50, 200, 200);

            ctx.fillStyle = 'yellow';
            ctx.fillRect(100, 100, 20, 20);  
                     
            ctx.fillStyle = 'yellow';
            ctx.fillRect(150, 100, 20, 20);

            ctx.fillStyle = 'purple';
            
            ctx.fillRect(80, 200, 120, 20);
            
            button.textContent = 'Torna a capo';
            stato = 3;

        } else {
            message.textContent = '';
            canvas.classList.add('hidden');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            button.textContent = 'Testo a sorpresa';
            stato = 0;
        }
    }