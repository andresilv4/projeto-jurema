<script>
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
</script>

<header
    class="app-header px-12 py-4 flex items-center justify-between shadow-lg"
>
    <a
        class="logo-wrapper flex-shrink-0 flex flex-col items-center"
        href="/"
        aria-label="Juremá home"
    >
        <h1 class="ballet text-5xl text-lime-600">Juremá</h1>
        <span class="grenze text-xs text-lime-600"
            >Esotericismo e Espiritualidade</span
        >
    </a>

    <nav
        class="main-nav flex flex-grow items-center justify-center"
        aria-label="Main navigation"
    >
        <!-- replaced invalid class w-6/10 with w-3/5 and a max width -->
        <ul
            class="nav-links w-3/5 max-w-3xl flex items-center justify-between text-lg text-lime-700 roboto"
        >
            <li><a class="hover:underline" href="/">Início</a></li>
            <li><a class="hover:underline" href="/produtos">Produtos</a></li>
            <li><a class="hover:underline" href="/oraculos">Oráculos</a></li>
            <li>
                <a class="hover:underline" href="/banhos">Banhos/Defumações</a>
            </li>
            <li><a class="hover:underline" href="/contato">Contato</a></li>
        </ul>
    </nav>

    <div
        class="app-header-actions ml-8 px-4 flex items-center justify-center gap-4"
    >
        <a href="/carrinho" aria-label="Ver carrinho" class="text-lime-600">
            <FontAwesomeIcon icon={faCartShopping} class="text-3xl" />
        </a>
    </div>
</header>
