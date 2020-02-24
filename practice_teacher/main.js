let headerClass = document.querySelector("header.wrapper");

document.querySelector("#icon-open").addEventListener('click', () => {
    headerClass.className = "wrapper nav-open";
});

document.querySelector("#icon-close").addEventListener('click', () => {
    headerClass.className = "wrapper";
});

/* Se puede hacer de una manera mejor, cerrando los menus por cada link */