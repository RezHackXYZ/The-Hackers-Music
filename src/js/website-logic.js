export async function websitelogic(query) {
	const apiKey = localStorage.getItem("googleSearchKey");

	const searchEngineId = "345215221e5ff4a7a"; //This is my one, you can use you own or use this. it can be publicly shared... as it only holds the config that to search the whole web, not a paticular site!

	// Create the Google Custom Search API URL
	const searchUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(
		query
	)}`;

	// Fetch search results
	const response = await fetch(searchUrl);
	const data = await response.json();

	// Check if we have search results
	if (data.items && data.items.length > 0) {
		// Get the first result URL
		const firstResultUrl = data.items[0].link;

		// Redirect to the first result
		window.location.href = firstResultUrl;
	} else {
		alert("No search results found");
	}
}
