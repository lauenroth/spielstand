<script lang="ts">
  import Table from './components/Table.svelte';
  let showTable = false;

  const toggleTable = () => {
    showTable = !showTable;
  };
</script>

<header class="main">
  <h1>Spielstand</h1>
</header>

{#if showTable}
  <Table />
{/if}

<button type="button" on:click={toggleTable}>Show table</button>

<style>
</style>
