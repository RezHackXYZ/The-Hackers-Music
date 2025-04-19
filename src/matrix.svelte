<script>
    import { onMount, onDestroy } from 'svelte';

    let canvas;
    let ctx;
    let columns = [];
    let fontSize = 14;
    let animationId;

    onMount(() => {
        ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const columnsCount = Math.floor(canvas.width / fontSize);
        columns = Array(columnsCount).fill(0).map(() => Math.floor(Math.random() * canvas.height));
        startMatrix();
        
        var handleResize = function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Array(Math.floor(canvas.width / fontSize)).fill(0).map(() => Math.floor(Math.random() * canvas.height));
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    });

    function startMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = `${fontSize}px monospace`;
        
        for (var i = 0; i < columns.length; i++) {
            var text = Math.random() > 0.5 ? '1' : '0';
            ctx.fillText(text, i * fontSize, columns[i] * fontSize);
            columns[i]++;
            
            if (columns[i] * fontSize > canvas.height && Math.random() > 0.975) {
                columns[i] = 0;
            }
        }
        
        animationId = requestAnimationFrame(startMatrix);
    }

    onDestroy(() => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
</script>

<style>
    canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
    }
</style>

<canvas bind:this={canvas}></canvas>
