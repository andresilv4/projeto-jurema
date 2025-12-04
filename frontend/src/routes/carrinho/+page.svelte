<script>
    import CartItem from "../../components/CartItem.svelte";

    const placeholder = 'https://placehold.co/600x600/5E8C6B/FFFFFF?text=Produto';

    let items = [
        {
            id: 1,
            title: "Incenso de Alfazema",
            subtitle: "Pacote 20 unidades",
            price: 9.9,
            quantity: 2,
            image: placeholder,
        },
        {
            id: 2,
            title: "Banho Relaxante",
            subtitle: "250ml",
            price: 24.5,
            quantity: 1,
            image: placeholder,
        },
    ];

    // Try to load from localStorage (keeps the mock if nothing saved)
    if (typeof localStorage !== "undefined") {
        const saved = localStorage.getItem("cart-items");
        if (saved) {
            try {
                items = JSON.parse(saved);
            } catch (e) {
                /* ignore parse errors */
            }
        }
    }

    // persist on change
    $: saveCart();
    function saveCart() {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("cart-items", JSON.stringify(items));
        }
    }

    function increase(id) {
        items = items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
        );
    }

    function decrease(id) {
        items = items
            .map((i) =>
                i.id === id
                    ? { ...i, quantity: Math.max(1, i.quantity - 1) }
                    : i,
            )
            .filter((i) => i.quantity > 0);
    }

    function removeItem(id) {
        items = items.filter((i) => i.id !== id);
    }

    function clearCart() {
        items = [];
    }

    $: subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0);
    // simple shipping rules: free over 100, otherwise 12.50
    $: shipping = items.length === 0 ? 0 : subtotal >= 100 ? 0 : 12.5;
    $: total = subtotal + shipping;

    function checkout() {
        // mock checkout action
        alert("Checkout simulado — total: R$ " + total.toFixed(2));
    }
</script>

<div class="min-h-[60vh] container mx-auto px-4 py-6">
    <h1 class="text-4xl font-bold text-lime-600 mb-6">Carrinho</h1>

    {#if items.length === 0}
        <div class="bg-white rounded shadow p-8 text-center">
            <p class="text-lg mb-4">Seu carrinho está vazio.</p>
            <a
                href="/produtos"
                class="inline-block bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700"
            >
                Ver produtos
            </a>
        </div>
    {:else}
        <div class="grid md:grid-cols-3 gap-6">
            <div class="md:col-span-2 bg-white rounded shadow p-6 space-y-6">
                <div class="flex justify-between items-center mb-2">
                    <div class="text-sm text-gray-600">
                        Você tem {items.length}
                        {items.length === 1 ? "item" : "itens"} no carrinho
                    </div>
                    <div class="flex items-center gap-2">
                        <button
                            class="text-sm text-red-600 hover:underline"
                            on:click={clearCart}>Limpar carrinho</button
                        >
                    </div>
                </div>

                <div class="divide-y">
                    {#each items as item (item.id)}
                        <div class="py-4">
                            <CartItem
                                {item}
                                onIncrease={increase}
                                onDecrease={decrease}
                                onRemove={removeItem}
                            />
                        </div>
                    {/each}
                </div>
            </div>

            <aside class="bg-white rounded shadow p-6 h-fit">
                <h2 class="text-lg font-semibold mb-4">Resumo do pedido</h2>

                <dl class="space-y-3 text-sm">
                    <div class="flex justify-between">
                        <dt class="text-gray-600">Subtotal</dt>
                        <dd class="font-medium">R$ {subtotal.toFixed(2)}</dd>
                    </div>

                    <div class="flex justify-between">
                        <dt class="text-gray-600">Frete</dt>
                        <dd class="font-medium">R$ {shipping.toFixed(2)}</dd>
                    </div>

                    <div class="border-t pt-3 flex justify-between">
                        <dt class="text-gray-700">Total</dt>
                        <dd class="text-xl font-semibold text-lime-600">
                            R$ {total.toFixed(2)}
                        </dd>
                    </div>
                </dl>

                <div class="mt-6 space-y-3">
                    <button
                        class="w-full bg-lime-600 text-white px-4 py-3 rounded hover:bg-lime-700 cursor-pointer"
                        on:click={checkout}
                    >
                        Finalizar compra
                    </button>

                    <a
                        href="/produtos"
                        class="block w-full text-center border rounded px-4 py-3 hover:bg-gray-50"
                    >
                        Continuar comprando
                    </a>
                </div>
            </aside>
        </div>
    {/if}
</div>
