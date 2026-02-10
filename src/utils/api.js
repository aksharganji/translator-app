export async function translateTextAPI(text, targetLang) {
  const url = "https://google-translator9.p.rapidapi.com/v2";

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "google-translator9.p.rapidapi.com",
    },
    body: JSON.stringify({
      q: text,
      source: "en",
      target: targetLang,
      format: "text",   // REQUIRED (your screenshot confirms this)
    }),
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (!data?.data?.translations?.[0]?.translatedText) {
    throw new Error("Translation failed");
  }

  return data.data.translations[0].translatedText;
}
