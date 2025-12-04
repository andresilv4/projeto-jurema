<script>
    // A simple cart item component (visual only)
    export let item;
    export let onIncrease = () => {};
    export let onDecrease = () => {};
    export let onRemove = () => {};
</script>

<div class="flex gap-4 items-start">
    <img
        src={item.image}
        alt={item.title}
        class="w-24 h-24 object-cover rounded border"
    />

    <div class="flex-1">
        <div class="flex justify-between items-start">
            <div>
                <h3 class="font-semibold text-lg">{item.title}</h3>
                <p class="text-sm text-gray-600">{item.subtitle}</p>
            </div>

            <div class="text-right">
                <div class="text-lg font-semibold">
                    R$ {Number(item.price).toFixed(2)}
                </div>
                <button
                    type="button"
                    class="text-sm text-red-600 mt-2 hover:underline cursor-pointer"
                    on:click={() => onRemove(item.id)}
                >
                    Remover
                </button>
            </div>
        </div>

        <div class="mt-3 flex items-center gap-3">
            <div class="inline-flex items-center border rounded">
                <button
                    class="px-3 py-1 hover:bg-gray-100"
                    aria-label="Diminuir quantidade"
                    on:click={() => onDecrease(item.id)}>−</button
                >
                <div class="px-4 py-1 min-w-[48px] text-center">
                    {item.quantity}
                </div>
                <button
                    class="px-3 py-1 hover:bg-gray-100"
                    aria-label="Aumentar quantidade"
                    on:click={() => onIncrease(item.id)}>+</button
                >
            </div>

            <div class="text-sm text-gray-500">
                Subtotal: R$ {(item.quantity * item.price).toFixed(2)}
            </div>
        </div>
    </div>
</div>
