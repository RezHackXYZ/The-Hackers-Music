<script>
	let props = $props();
</script>

<div id="root">
    <input type="checkbox" id="checkbox" />
	<h1 id="name">{props.name}</h1>
</div>

<style>
	#root {
		border: 2px solid #2e2e2e;
		background-color: #131313;
		color: #d8d8d8;
		padding: 5px;
		border-radius: 5px;
		margin: 5px;
        width: fit-content;

        display: flex;
	}
    #checkbox {
        margin-right: 5px;
		align-self: center;
        width: 25px;
        height: 25px;
    }

	#name {
		margin: 0;
		align-self: center;
	}
</style>
