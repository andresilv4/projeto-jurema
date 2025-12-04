<script>
    import Card from "../../components/Card.svelte";

    const productsData = [
        {
            id: 1,
            title: "Incenso de Alfazema Premium",
            price: "R$ 39.90",
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
        {
            id: 4,
            title: "Cristal Ametista Ponta",
            price: "R$ 98.50",
            rating: 4.8,
            reviews: 90,
            desc: "Pedra da transmutação, protege contra energias negativas e estimula a intuição. Peça bruta polida, ideal para altares.",
            imgText: "Ametista",
        },
        {
            id: 5,
            title: "Vela 7 Dias Branca",
            price: "R$ 15.00",
            rating: 4.2,
            reviews: 155,
            desc: "Para orações e intenções de paz. Duração aproximada de 7 dias, feita com parafina de alta qualidade, sem cheiro.",
            imgText: "Vela+Branca",
        },
        {
            id: 6,
            title: "Baralho de Tarot Egípcio",
            price: "R$ 135.00",
            rating: 4.9,
            reviews: 32,
            desc: "Deck com ilustrações ricas baseadas na tradição egípcia. Inclui manual e caixa protetora. Perfeito para leituras avançadas.",
            imgText: "Tarot+Egípcio",
        },
        {
            id: 7,
            title: "Pêndulo de Quartzo Fumê",
            price: "R$ 78.00",
            rating: 4.6,
            reviews: 88,
            desc: "Ideal para radiestesia e busca de respostas. Ajuda a dissipar o medo e a depressão, trazendo estabilidade emocional.",
            imgText: "Quartzo+Fumê",
        },
        {
            id: 8,
            title: "Água Floral de Rosas",
            price: "R$ 45.00",
            rating: 5.0,
            reviews: 25,
            desc: "Tônico suave para a pele e o espírito. Promove o amor-próprio e eleva a frequência vibracional. 100% natural.",
            imgText: "Água+Floral",
        },
        {
            id: 9,
            title: "Incensário de Cerâmica Buda",
            price: "R$ 85.00",
            rating: 4.7,
            reviews: 75,
            desc: "Peça decorativa que representa a paz e a iluminação. Base larga, segura e fácil de limpar para incensos de vareta.",
            imgText: "Incensário+Buda",
        },
        {
            id: 10,
            title: "Mantra Box - Relaxamento",
            price: "R$ 110.00",
            rating: 4.3,
            reviews: 52,
            desc: "Caixa presenteável contendo incenso, vela, cristal e guia de meditação. Foco em alívio do stress e tranquilidade.",
            imgText: "Mantra+Box",
        },
        {
            id: 11,
            title: "Sal Grosso com Ervas",
            price: "R$ 22.90",
            rating: 4.1,
            reviews: 130,
            desc: "Para banhos de purificação e limpeza pesada. Mistura de sal marinho e sete ervas protetoras, prontas para uso.",
            imgText: "Sal+Ervas",
        },
        {
            id: 12,
            title: "Escalda Pés Revigorante",
            price: "R$ 30.00",
            rating: 4.4,
            reviews: 40,
            desc: "Com óleos de hortelã e eucalipto para ativar a circulação e aliviar o cansaço. Contém pétalas de flores secas.",
            imgText: "Escalda+Pés",
        },
    ];
</script>

<div class="content">
    <div class="products py-5 px-10">
        <div class="row">
            <div class="col-lg-12 m-auto">
                <h1 class="grenze text-5xl text-green-600 pb-2">Banhos e Defumações</h1>
                <p class="roboto font-thin">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div class="row pt-4">
            {#each productsData as product (product.id)}
                <!-- Apply the grid column class to the wrapper div -->
                <div class="col-4 pt-8">
                    <Card {product} />
                </div>
            {/each}
        </div>
    </div>
</div>
