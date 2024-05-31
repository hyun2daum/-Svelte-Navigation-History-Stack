<!-- src/routes/Step2.svelte -->
<script>
    import { onMount } from 'svelte';
    import * as com from '../com.js';

    onMount(async () => {
       let obj = {
        isSkip_page : true
       }
        com.initPage('/step2', obj); // 스킵페이지 설정
    });

</script>

<h1>Step 2</h1>
<h5>스킵페이지 입니다.</h5>
