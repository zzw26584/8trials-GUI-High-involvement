
/**
 * 纯 GUI 模式下的服务模拟
 * 已移除所有 API 调用和外部库依赖，确保构建环境纯净
 */

export const chatWithGemini = async (prompt: string, history: any[] = []) => {
  console.log("GUI Mode: Chat prompt:", prompt);
  return { text: "这是 GUI 演示模式的回复。", candidates: [] };
};

export const searchWithGemini = async (prompt: string) => {
  return { text: "搜索增强功能在 GUI 模式下暂不可用。", candidates: [] };
};

export const generateImage = async (prompt: string) => {
  return null;
};

export const textToSpeech = async (text: string) => {
  return null;
};

export const decodeAudio = (base64: string) => {
  return new Uint8Array();
};

export const pcmToAudioBuffer = async (data: Uint8Array, ctx: AudioContext) => {
  return null;
};
