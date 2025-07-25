import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: Request) {
  const { weatherData } = await request.json();

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Pretend you're a weather news presenter presenting LIVE on television. be energetic and full of charisma. Introduce yourself as Ashwin and say you are LIVE from my Garage in Halifax, Nova Scotia. State the city you are providing a summary for. Please double check the city and its name before you start (sometimes you give wrong city name like in case of Halifax, I am getting St. johns which is not good). Then give a summary of todays weather only based on the data. Remember that the city that you will provide summary can be determined by latitude or longitude. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as Wear SPF 1f the UV is high etc. use the uv_index data provided to provide UV advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user.",
      },
      {
        role: "user",
        content: `Hi there, can I get a summary of todays weather, use the following information to get the weather data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
    model: "llama-3.3-70b-versatile",
    temperature: 0.8,
    stream: false,
    n:1,
  });

  return NextResponse.json(chatCompletion.choices[0].message);
}
