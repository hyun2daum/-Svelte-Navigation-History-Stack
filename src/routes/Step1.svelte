<!-- src/routes/Step1.svelte -->
<script>
    import { onMount } from 'svelte';
    import * as com from '../com.js';

    onMount(async () => {
        com.initPage('/step1');
    });
    $ : name = "김개발자";
</script>

<h1>Step 1(input binding 예시)</h1>
<h5>{name != '' ? name : '이름을 입력해주세요'}</h5>
<input bind:value={name} placeholder="이름을 넣어주세요.">