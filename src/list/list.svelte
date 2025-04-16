<script>
	import Item from "./item.svelte";
	import Option from "./options.svelte";
</script>

<div id="root">
	<div id="option">
		<Option name="PHONK" />
		<Option name="CALM" />
	</div>

    <hr>

	<div id="items">
		<Item name="abc" image="https://placehold.co/400" />
		<Item name="abc" image="https://placehold.co/400" />
		<Item name="abc" image="https://placehold.co/400" />
		<Item name="abc" image="https://placehold.co/400" />
		<Item name="abc" image="https://placehold.co/400" />
		<Item name="abc" image="https://placehold.co/400" />
	</div>
</div>

<style>
	#root {
		height: 80%;
		border: 10px solid rgb(46, 46, 46);
		width: 25%;
		border-radius: 20px;
	}

	#option {
		display: flex;
		overflow-x: auto;
	}

    hr {
        margin: 0;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 10px;
        border: 0;
        height: 5px;
        background-color: rgb(46, 46, 46);
    }
</style>
