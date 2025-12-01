<script>
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
</script>

<header
    class="app-header px-12 py-4 flex items-center justify-between shadow-lg"
>
    <div class="logo-wrapper w-fit flex-shrink flex-col items-center">
        <h1 class="ballet text-5xl text-lime-600">Juremá</h1>
        <span class="grenze text-xs text-lime-600"
            >Esotericismo e Espiritualidade</span
        >
    </div>

    <div class="main-nav flex flex-grow items-center justify-center">
        <ul
            class="nav-links w-6/10 flex items-center justify-between text-lg text-lime-700 roboto"
        >
            <li><a href="/">Início</a></li>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/oraculos">Oráculos</a></li>
            <li><a href="/banhos">Banhos/Defumanções</a></li>
            <li><a href="/contato">Contato</a></li>
        </ul>
    </div>

    <div
        class="app-header-actions ml-8 px-4 flex items-center justify-center gap-4"
    >
        <a href="/carrinho">
            <FontAwesomeIcon
                icon={faCartShopping}
                class="text-3xl text-lime-600"
            />
        </a>
    </div>
</header>
