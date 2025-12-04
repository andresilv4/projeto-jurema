<script>
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import {
        faStar as faStarFill,
        faStarHalfAlt,
    } from "@fortawesome/free-solid-svg-icons";
    import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

    export let product;
    export let p_img = ""; // optional external image
    export let forcePlaceholder = false; // when true, start with a text-placeholder regardless of p_img

    // Generated placeholder (green background with white text)
    const makePlaceholder = (text, bg = "5E8C6B", fg = "FFFFFF") =>
        `https://placehold.co/600x600/${bg}/${fg}?text=${encodeURIComponent(text)}`;

    // initial image source:
    // - if forcePlaceholder is true -> use text placeholder
    // - otherwise use p_img if present, else generated placeholder using product.imgText
    $: initialPlaceholder = makePlaceholder(product?.imgText ?? "Image");
    $: imgSrc = forcePlaceholder ? initialPlaceholder : (p_img || initialPlaceholder);

    // product link
    $: p_link = `/product/${product?.id ?? ''}`;

    function getStarIcon(index) {
        const rating = product?.rating ?? 0;
        if (rating >= index) return faStarFill;
        if (rating > index - 1 && rating < index) return faStarHalfAlt;
        return faStarEmpty;
    }

    function fallbackPlaceholder(event) {
        // avoid infinite loop if placeholder fails too
        if (event.target.dataset.fallback === "true") return;
        event.target.dataset.fallback = "true";
        event.target.src = makePlaceholder(product?.imgText ?? "Erro", "CCCCCC", "333333");
    }
</script>

<div class="card h-full">
    <a href={p_link} aria-label={"Ver produto: " + (product?.title ?? "")}>
        <img
            src={imgSrc}
            alt={product?.title ?? "Product image"}
            on:error={fallbackPlaceholder}
            loading="lazy"
            class="card-img-top aspect-square object-cover"
        />

        <div class="card-body">
            <ul class="pb-4 flex items-center justify-between">
                <li class="pt-1 flex items-center">
                    {#each [1, 2, 3, 4, 5] as i}
                        <FontAwesomeIcon
                            icon={getStarIcon(i)}
                            class="text-xl text-lime-600 mr-0.5"
                        />
                    {/each}
                </li>
                <li class="product-price text-right">{product?.price}</li>
            </ul>

            <h2 class="card-title pb-2">{product?.title}</h2>

            <p class="card-text pb-4 text-gray-600 text-base flex-grow">
                {product?.desc}
            </p>

            <p class="product-review-count">Avaliações ({product?.reviews})</p>

            <button
                class="mt-4 w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-md"
                type="button"
            >
                Adicionar ao Carrinho
            </button>
        </div>
    </a>
</div>