<script>
    // simple mockup form (no validations, visual only)
    let name = "";
    let email = "";
    let subject = "";
    let message = "";
    let sent = false;

    function onSubmit(e) {
        e.preventDefault();
        sent = true;
        setTimeout(() => {
            sent = false;
            name = email = subject = message = "";
        }, 1000);
    }

    function onClear() {
        name = "";
        email = "";
        subject = "";
        message = "";
        sent = false;
    }
</script>

<div class="h-[85vh] box-border mx-auto px-4 py-6 flex flex-col">
    <div class="flex flex-col md:flex-row gap-6 flex-1 min-h-0">
        <aside
            class="w-full md:w-64 flex-shrink-0 bg-white rounded shadow p-4 overflow-auto"
            aria-label="left sidebar"
        >
            <h3 class="roboto text-lg mb-6">Como podemos ajudar?</h3>
            <nav>
                <ul class="space-y-2 px-4 text-sm">
                    <li>FAQs</li>
                    <li>Encomendas</li>
                    <li>Reembolsos e Retornos</li>
                    <li>Tornar-se Vendedor</li>
                    <li>Encomendas</li>
                    <li>Reembolsos e Retornos</li>
                    <li>Provedores</li>
                    <li>Encomendas</li>
                    <li>Reembolsos e Retornos</li>
                </ul>
            </nav>
        </aside>

        <main class="flex-1 bg-white rounded shadow p-4 overflow-auto min-h-0">
            <h1 class="text-5xl text-green-600 grenze pb-6">
                Entre em Contato
            </h1>

            {#if sent}
                <div
                    class="mb-4 p-3 rounded bg-emerald-50 border border-emerald-200 text-emerald-700"
                >
                    Mensagem enviada (simulada).
                </div>
            {/if}

            <form on:submit={onSubmit} class="flex flex-col gap-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                        <label
                            for="name"
                            class="block text-sm font-medium text-gray-700 mb-1"
                            >Nome</label
                        >
                        <input
                            id="name"
                            type="text"
                            bind:value={name}
                            class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-300"
                            placeholder="Seu nome"
                        />
                    </div>

                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium text-gray-700 mb-1"
                            >Email</label
                        >
                        <input
                            id="email"
                            type="email"
                            bind:value={email}
                            class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-300"
                            placeholder="seu@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="subject"
                        class="block text-sm font-medium text-gray-700 mb-1"
                        >Assunto</label
                    >
                    <input
                        id="subject"
                        type="text"
                        bind:value={subject}
                        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-300"
                        placeholder="Assunto"
                    />
                </div>

                <div>
                    <label
                        for="message"
                        class="block text-sm font-medium text-gray-700 mb-1"
                        >Mensagem</label
                    >
                    <textarea
                        id="message"
                        rows="8"
                        bind:value={message}
                        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-300 resize-none"
                        placeholder="Escreva sua mensagem aqui..."
                    ></textarea>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700 cursor-pointer"
                    >
                        {#if sent}Enviando...{:else}Enviar mensagem{/if}
                    </button>

                    <button
                        type="button"
                        class="px-3 py-2 border-2 border-gray-200 rounded text-sm text-gray-500 cursor-pointer"
                        on:click={onClear}
                    >
                        Limpar
                    </button>
                </div>
            </form>
        </main>

        <aside
            class="w-full md:w-64 flex-shrink-0 bg-white rounded shadow p-4 overflow-auto"
            aria-label="right sidebar"
        >
            <h3 class="font-semibold mb-2">Horário de Funcionamento</h3>
            <div class="text-sm">
                <p>Segunda à Sexta - 07:30 às 19:00</p>
                <p class="pb-8">Feriados variam.</p>

                <p class="pb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, totam.
                </p>

                <a class="text-2xl text-green-600 underline" href="/"
                    >VER FAQs</a
                >
            </div>
        </aside>
    </div>
</div>
