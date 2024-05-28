<!-- src/routes/Home.svelte -->
<script>
    import { onMount } from 'svelte';
    import * as com from '../com.js';
    
    onMount(async () => {
        com.initPage('/home');
    });

</script>
<h1>Home Page</h1>
<h5>이 페이지가 첫페이지(home을 누르면 모든 history stack이 날아감.)</h5>