<!-- src/App.svelte -->
<script>
	import { Router, Link, Route, navigate } from 'svelte-routing';
	import Home from './routes/Home.svelte';
	import Step1 from './routes/Step1.svelte';
	import Step2 from './routes/Step2.svelte';
	import Step3 from './routes/Step3.svelte';
	import * as com from './com.js';
	
</script>


<button on:click={com.goBack}> &lt;&lt; 뒤로가기</button>
<Router>
  <nav class="nav">
    <Link to="/" on:click={com.goHome}>Home</Link>
    <Link to="step1">Step 1</Link>
    <Link to="step2">Step 2</Link>
	<Link to="step3">Step 3</Link>
  </nav>

	<Route path="/" component={Home} />
	<Route path="/home" component={Home} />
	<Route path="step1" component={Step1} />
	<Route path="step2" component={Step2} />
	<Route path="step3" component={Step3} />
</Router>
