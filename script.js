document.addEventListener('DOMContentLoaded', function() {
    const structure = {
        "cypress": {
            "e2e": {
                "auth": "Testes de autenticação",
                "modals": "Testes específicos para modais",
                "user-management": "Testes de gerenciamento de usuários",
                "products": "Testes relacionados a produtos, etc."
            },
            "fixtures": {
                "users.json": "Dados mock de usuários",
                "products.json": "Dados mock de produtos",
                "config.json": "Dados de configuração de teste"
            },
            "support": {
                "commands.js": "Comandos customizados Cypress",
                "e2e.js": "Configurações globais para testes",
                "pageObjects": {
                    "LoginPage.js": "Page Object para a página de login",
                    "ProductPage.js": "Page Object para a página de produtos"
                }
            },
            "plugins": {
                "index.js": "Plugins Cypress, configurações adicionais"
            }
        }
    };

    function createTree(container, structure) {
        const ul = document.createElement('ul');
        for (const key in structure) {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = key;
            li.appendChild(span);
            if (typeof structure[key] === 'object' && structure[key] !== null) {
                createTree(li, structure[key]);
                li.classList.add('parent_li');
            } else {
                const description = document.createElement('div');
                description.classList.add('description');
                description.textContent = structure[key];
                li.appendChild(description);
            }
            ul.appendChild(li);
        }
        container.appendChild(ul);
    }

    const container = document.getElementById('project-structure');
    createTree(container, structure);

    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.tree li.parent_li > span').on('click', function (e) {
        const children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(':visible')) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();
    });
    




});
