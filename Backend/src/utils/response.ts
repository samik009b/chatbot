import Groq from "groq-sdk";
import { config } from "../config";
import { apiConfig } from "../config/api";
import { getMessageHistory } from "./messageHistory";
import { ChatMessage } from "../types/index";

const groq = new Groq({ apiKey: config.API_KEY });

/**
 * @returns {Promise} The Groq API response containing the chat completion.
 */
export async function getGroqChatCompletion(enquiry: string) {
  const contextMessageHistory = await getMessageHistory();

  const messages: ChatMessage[] = [
    {
      role: "system",
      content: apiConfig.prompt,
    },
    ...contextMessageHistory,
    {
      role: "user",
      content: enquiry,
    },
  ];

  return groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages,
  });
}
