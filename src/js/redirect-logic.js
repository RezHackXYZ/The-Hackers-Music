import { websitelogic } from "./website-logic.js";

let globalQuery;

export function whatsthequery() {
	return globalQuery;
}

function querysearch(query) {}
function queryllm(query) {
	window.location.href = "#/llm";
}
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: localStorage.getItem("geminiApiKey") });
export async function search(query) {
	globalQuery = query;

	const response = await ai.models.generateContent({
		model: "gemma-3-4b-it",
		contents: `

You are a search agent. Your task is to classify the user's question into one of three types:
- search: The question is time-sensitive, related to current events, or better answered by a search engine (e.g., "What happened yesterday in the news?").
- llm: The question involves reasoning, step-by-step thinking, or tasks that a language model can handle better than a search engine (e.g., "Solve this math problem" or "Write a poem").
- website: The query is a direct intent to access a specific website or tool, without needing additional context (e.g., "Open Google Translate" or "Rickroll link").

Only reply in the json format based on what you think best fits the user's question. Do not include any other text or explanation:

if the question is a search query, respond with:
{
"type": "search"
}
if the question is a website query, respond with:
{
"type": "website",
"FuzzedText": "" (fuzzed text is a more clear vertion of the query, it should fix all spelling mistakes, make it more acurate. ex: "g trensllate" -> "google translate")
}
if the question is a search query, respond with:
{
"type": "llm"
}


The users question is: "${query}".

`,
	});

	let typeOfQuery = JSON.parse(response.text.slice(7, -4)).type;

	if (typeOfQuery == "search") {
		querysearch(query);
	} else if (typeOfQuery == "llm") {
		queryllm(query);
	} else if (typeOfQuery == "website") {
		websitelogic(JSON.parse(response.text.slice(7, -4)).FuzzedText);
	}
}
