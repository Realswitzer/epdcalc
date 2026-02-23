<script>
  let { children } = $props();
  import "../app.css";
</script>

<svelte:head>
  <meta name="og:title" content="epdcalc | sylvyon.dev" />
  <meta
    name="og:description"
    content="poorly made calculator for entry point defense"
  />
  <meta name="og:type" content="website" />
  <meta name="keywords" content="epdcalc, sylvyon.dev" />
  <meta name="robots" content="noindex, nofollow" />
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="language" content="English" />
  <meta name="author" content="sylvyon" />
</svelte:head>

{@render children()}
