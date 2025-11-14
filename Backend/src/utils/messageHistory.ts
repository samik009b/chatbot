import Message from "../models/message.model";
import { ChatMessage } from "../types/index";

/**
 * @returns {Promise} -  an array of chat messages, alternating between
 * user enquiries and assistant responses by sorting them from  oldest to newest.
 */
export async function getMessageHistory(): Promise<ChatMessage[]> {
  const lastTenMessages = await Message.find()
    .sort({ createdAt: 1 })
    .limit(10)
    .select("enquiry response");

  const contextMessageHistory: ChatMessage[] = [];

  lastTenMessages.forEach((msg) => {
    if (msg.enquiry && msg.enquiry.trim() !== "") {
      contextMessageHistory.push({ role: "user", content: msg.enquiry });
    }

    if (msg.response && msg.response.trim() !== "") {
      contextMessageHistory.push({ role: "assistant", content: msg.response });
    }
  });

  return contextMessageHistory;
}
