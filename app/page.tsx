import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394568] to-[#1837BE] p-10 flex flex-col items-center">
      <Card className="max-w-4xl mx-auto mt-7">
        <Text className="text-4xl md:text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by GROQ AI, Next.js, Tailwind CSS, Tremor, Hygraph and more!
        </Subtitle>

        <Divider className="my-8" />

        <Card className="bg-gradient-to-br from-[#394568] to-[#1837BE]">
          <CityPicker />
        </Card> 
      </Card>
    </div>
  );
}
