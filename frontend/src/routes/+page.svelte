<script>
    import Card from "../components/Card.svelte";
    import tarot from "../assets/incenso-alfazema.jpg";
    import cta_image from "../assets/tarot.png";

    const productsData = [
        {
            id: 1,
            title: "Incenso de Alfazema Premium",
            price: "R$ 3a9.90",
            rating: 4.5,
            reviews: 48,
            desc: "Promove relaxamento profundo e paz interior. Feito com óleos essenciais puros de alfazema, ideal para meditação noturna.",
            imgText: "Alfazema",
        },
        {
            id: 2,
            title: "Óleo Essencial de Sândalo",
            price: "R$ 69.90",
            rating: 5.0,
            reviews: 112,
            desc: "Aroma amadeirado, excelente para aterramento e foco espiritual. Auxilia na conexão com o divino e na elevação vibracional.",
            imgText: "Sândalo",
        },
        {
            id: 3,
            title: "Kit Banho de Descarrego",
            price: "R$ 49.00",
            rating: 4.0,
            reviews: 67,
            desc: "Combinação de sal grosso, arruda e guiné para limpeza energética e quebra de feitiços. Use semanalmente para renovação.",
            imgText: "Descarrego",
        },
    ];
</script>

<div class="content">
    <div class="featured py-5 px-10">
        <div class="row">
            <div class="col-lg-6 m-auto text-center">
                <p class="roboto font-thin">Lorem ipsum dolor sit amet.</p>
                <h1 class="grenze text-5xl text-green-600 pb-2">
                    Novos Produtos
                </h1>
            </div>
        </div>

        <div class="row pt-4">
            {#each productsData as product, i (product.id)}
                <div class="col-4">
                    <Card
                        {product}
                    />
                </div>
            {/each}
        </div>

        <!-- rest of page unchanged... -->
        <div class="row left-0 right-0 mx-0! py-16 max-w-full overflow-hidden">
            <a href="/" class="block col-4 px-0! relative">
                <img src={tarot} alt="" class="w-full" />

                <div
                    class="overlay absolute inset-0 flex flex-col items-center justify-center px-10"
                >
                    <h1 class="grenze text-5xl text-white font-bold pb-4">
                        Incenso
                    </h1>
                    <p class="text-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat magni adipisci ex esse ipsum beatae quo neque,
                        laudantium reprehenderit ut dignissimos sunt incidunt
                        dolor! Est reprehenderit dolores nemo eligendi esse?
                    </p>
                </div>
            </a>
            <a href="/" class="block col-4 px-0! relative">
                <img src={tarot} alt="" class="w-full" />

                <div
                    class="overlay absolute inset-0 flex flex-col items-center justify-center px-10"
                >
                    <h1 class="grenze text-5xl text-white font-bold pb-4">
                        Banhos
                    </h1>
                    <p class="text-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat magni adipisci ex esse ipsum beatae quo neque,
                        laudantium reprehenderit ut dignissimos sunt incidunt
                        dolor! Est reprehenderit dolores nemo eligendi esse?
                    </p>
                </div>
            </a>
            <a href="/" class="block col-4 px-0! relative">
                <img src={tarot} alt="" class="w-full" />

                <div
                    class="overlay absolute inset-0 flex flex-col items-center justify-center px-10"
                >
                    <h1 class="grenze text-5xl text-white font-bold pb-4">
                        Oráculos
                    </h1>
                    <p class="text-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat magni adipisci ex esse ipsum beatae quo neque,
                        laudantium reprehenderit ut dignissimos sunt incidunt
                        dolor! Est reprehenderit dolores nemo eligendi esse?
                    </p>
                </div>
            </a>
        </div>

        <div class="cta-section py-4 px-10">
            <div class="row items-center">
                <div class="col-lg-6 col-md-12">
                    <img
                        src={cta_image}
                        alt="Call to Action"
                        class="w-full h-auto object-cover"
                    />
                </div>
                <div
                    class="col-lg-6 flex flex-col justify-between col-md-12 lg:mt-0 lg:pl-12 h-full"
                >
                    <h2
                        class="grenze text-4xl text-green-600 md:text-5xl text-gray-800 pb-10"
                    >
                        Descubra a Sua Essência
                    </h2>
                    <p
                        class="roboto text-xl text-gray-600 mb-8 leading-relaxed flex-grow"
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Amet deserunt totam modi ipsum iusto magni qui
                        incidunt quas nostrum sapiente tempora sequi cum odit
                        itaque distinctio omnis mollitia, dolorem possimus
                        corporis tempore! Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Dicta id cupiditate
                        molestiae, velit minus inventore sit cumque eligendi
                        officiis illum praesentium eveniet illo voluptatum.
                    </p>
                    <a
                        href="/produtos"
                        class="inline-block max-w-fit px-10 py-3 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition duration-300 shadow-md"
                    >
                        Ver Todos os Produtos
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
