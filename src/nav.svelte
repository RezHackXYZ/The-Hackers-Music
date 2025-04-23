<div id="root">
	<div>
		<a href="#/">
			<img
				src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/dd4bc27ade938a848f0df1ac3ac1433fc86c3a07_group_14.svg"
				alt="logo"
				id="logo"
			/>
		</a>
	</div>
	<div>
		<a
			href="#/app"
			aria-label="app"
			onclick={() => {
				setTimeout(() => window.location.reload(), 10);
			}}
		>
			<button aria-label="app" id="config">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z"/></svg>
			</button>
		</a>
		<a href="#/setings" aria-label="config">
			<button aria-label="config" id="config">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#FFFFFF"
					><path
						d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
					/></svg
				>
			</button>
		</a>
	</div>
</div>

<style>
	#root {
		display: flex;
		justify-content: space-between;
		margin: 10px;
		border-radius: 10px;
		backdrop-filter: blur(10px);
		border: 2px solid white;
		align-items: center;
	}

	#logo {
		width: 200px;
		margin: 10px;
	}

	#config {
		background: none;
		color: white;
		height: 30px;
		width: 30px;
		border-radius: 100px;
		border: 0.5px solid white;
		margin: 5px;
		margin-left: 0;
		cursor: pointer;
		padding: 0;
	}
</style>
