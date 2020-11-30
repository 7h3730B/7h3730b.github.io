window.onload = function () {
    let links = [
        ['github', 'https://github.com/7h3730B', '7h3730B'],
        ['twitter', 'https://twitter.com/7h3730B', '@7h3730B'],
        ['envelope-open', 'mailto:teo.s@protonmail.com', 'teo.s@protonmail.com'],
        ['discord', '#', '7h3730B#5491']
    ];

    let linksDiv = document.getElementById('links');

    links.forEach((link) => {
        let tempA = document.createElement('a');
        tempA.classList.add('fa', `fa-${link[0]}`, 'icon');
        tempA.href = link[1];
        tempA.setAttribute('onmouseover', `
        document.getElementById('text-link').innerHTML = '${link[2]}';`);
        linksDiv.appendChild(tempA);
    });
    // Begin body animation
    document.getElementsByTagName('body')[0].style.opacity = 1;
};

function copyToClipboard(element) {
    navigator.clipboard.writeText(element.innerHTML).then(function () {
        document.getElementById('copie-text').style.opacity = 1;
        setTimeout(function(){ document.getElementById('copie-text').style.opacity = 0}, 3000);
    });
}