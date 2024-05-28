<!-- src/routes/Step2.svelte -->
<script>
    import { onMount } from 'svelte';
    import * as com from '../com.js';

    onMount(async () => {
        com.initPage('/step2', true); // 스킵페이지 설정
    });

</script>

<h1>Step 2</h1>
<h5>스킵페이지 입니다.</h5>
