<svelte:head>
  <title>Be right back</title>
</svelte:head>

<main class="stage">
  <h1>Be right back.</h1>
</main>

<style>
  :global(html),
  :global(body) {
    margin: 0;
    height: 100%;
    background: #5b8dc5;
  }

  .stage {
    display: grid;
    place-items: center;
    min-height: 100vh;
    min-height: 100dvh;
    background: #5b8dc5;
  }

  h1 {
    margin: 0;
    padding: 0 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(4.21875rem, 12.375vw, 9rem);
    line-height: 1.1;
    letter-spacing: -0.02em;
    text-align: center;
    color: #ffffff;
  }
</style>
