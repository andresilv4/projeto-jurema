<script>
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faStar } from "@fortawesome/free-regular-svg-icons";
    import { faStar as faStarFill } from "@fortawesome/free-solid-svg-icons";

    export let p_link = "";
    export let p_img = "";
</script>

<div class="card h-100">
    <a href={p_link} aria-label="product-link">
        <img src={p_img} alt="" class="card-img-top aspect-square object-cover">
        <div class="card-body">
            <ul class="pb-6 flex items-center justify-between">
                <li class="pt-1">
                    <FontAwesomeIcon icon={faStarFill} class="text-xl text-lime-600"/>
                    <FontAwesomeIcon icon={faStarFill} class="text-xl text-lime-600"/>
                    <FontAwesomeIcon icon={faStarFill} class="text-xl text-lime-600"/>
                    <FontAwesomeIcon icon={faStar} class="text-xl text-lime-600"/>
                    <FontAwesomeIcon icon={faStar} class="text-xl text-lime-600"/>
                </li>
                <li class="text-gray-400 text-lg text-right">$2000.00</li>
            </ul>

            <h2 class="text-3xl text-lime-600 font-semibold pb-4">Incenso de Alfazema</h2>

            <p class="card-text pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corporis aliquam in nesciunt. Earum nemo, minus facilis modi saepe temporibus!</p>
            
            <p class="text-gray-400">Reviews (32)</p>
        </div>
    </a>
</div>