<!-- src/routes/Step3.svelte -->
<script>
    import { onMount } from 'svelte';
    import * as com from '../com.js';

    onMount(async () => {
        com.initPage('/step3');
    });

    let list = ['당근', '호박', '로또'];
</script>

<h1>Step 3(리스트 예시)</h1>
{#each list as item}
<h5>{item}</h5>
{/each}