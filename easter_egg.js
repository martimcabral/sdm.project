document.getElementById('sdm-logo').addEventListener('click', function() {
    document.body.style.cursor = 'url(images/netherite_pickaxe.png), auto';
    document.querySelectorAll('nav a').forEach(function(link) {
        link.style.cursor = 'url(images/diamond_pickaxe.png), auto';
    });
});