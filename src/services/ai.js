const COHERE_API_KEY = "X6ahuAaFZcTOfV2F4b9l2d0N7NvWBl3z5aW7AAkn";
const COHERE_API_GENERATE_URL = "https://api.cohere.ai/generate";

export async function getAnswer(answer) {
  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify({
      model: "command-xlarge-nightly",
      prompt: `Generate paragraph with the answer to this question "${answer}"`,
      max_tokens: 300,
      temperature: 1.1,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: "NONE",
    }),
  });
  const data = await response.json();
  console.log(data);
  // return data.choices[0].text;
}

// curl --location --request POST 'https://api.cohere.ai/generate' \
//   --header 'Authorization: BEARER X6ahuAaFZcTOfV2F4b9l2d0N7NvWBl3z5aW7AAkn' \
//   --header 'Content-Type: application/json' \
//   --header 'Cohere-Version: 2022-12-06' \
//   --data-raw '{
//       "model": "command-xlarge-nightly",
//       "prompt": "Generate paragraph with the answer to this question \"What is you range salary?\"",
//       "max_tokens": 300,
//       "temperature": 1.1,
//       "k": 0,
//       "p": 0.75,
//       "frequency_penalty": 0,
//       "presence_penalty": 0,
//       "stop_sequences": [],
//       "return_likelihoods": "NONE"
//     }'
