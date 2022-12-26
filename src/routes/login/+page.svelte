<script lang="ts">
  import { browser, building, dev, version } from '$app/environment';
	import { goto } from '$app/navigation';
  import type { PageData, ActionData } from './$types';

  export let data: PageData;

  export let form: ActionData;
  let uri:string|undefined = form?.uri??'login'
  console.log(browser)
  if (browser) goto(uri);
</script>
<form method="POST" action="?/login">
    <button class="btn">line Login</button>
  </form>