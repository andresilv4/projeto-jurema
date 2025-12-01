<script>
    import Card from '../components/Card.svelte';
    import incenso from '../assets/incenso-alfazema.jpg'

    export let data;
</script>

<div class="content ">
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
            <div class="col-4">
                <Card p_link="/" p_img="{incenso}"></Card>
            </div>
            <div class="col-4">
                <Card p_link="/" p_img="{incenso}"></Card>
            </div>
            <div class="col-4">
                <Card p_link="/" p_img="{incenso}"></Card>
            </div>
        </div>

        <div class="row absolute left-0 right-0 mx-0! py-16 max-w-full overflow-hidden">
            <div class="col-4 px-0! relative">
                <img src={incenso} alt="" class="w-full">

                <div class="overlay absolute inset-0 flex flex-col items-center justify-center px-10">
                    <h1 class="grenze text-5xl text-white font-bold pb-4">Incenso</h1>
                    <p class="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni adipisci ex esse ipsum beatae quo neque, laudantium reprehenderit ut dignissimos sunt incidunt dolor! Est reprehenderit dolores nemo eligendi esse?</p>
                </div>
            </div>
            <div class="col-4 px-0! relative">
                <img src={incenso} alt="" class="w-full">

                <div class="overlay absolute inset-0 flex flex-col items-center justify-center px-10">
                    <h1 class="grenze text-5xl text-white font-bold pb-4">Banhos</h1>
                    <p class="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni adipisci ex esse ipsum beatae quo neque, laudantium reprehenderit ut dignissimos sunt incidunt dolor! Est reprehenderit dolores nemo eligendi esse?</p>
                </div>
            </div>
            <div class="col-4 px-0! relative">
                <img src={incenso} alt="" class="w-full">

                <div class="overlay absolute inset-0 flex flex-col items-center justify-center px-10">
                    <h1 class="grenze text-5xl text-white font-bold pb-4">Oráculos</h1>
                    <p class="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni adipisci ex esse ipsum beatae quo neque, laudantium reprehenderit ut dignissimos sunt incidunt dolor! Est reprehenderit dolores nemo eligendi esse?</p>
                </div>
            </div>
        </div>
    </div>
</div>
