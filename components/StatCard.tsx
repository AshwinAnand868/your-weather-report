"use client";

import { Card, Color, Metric, Text } from "@tremor/react";

// dummy color type
// enum Color {
//   Indigo = "indigo",
//   Slate = "slate",
//   Gray = "gray",
//   Zinc = "zinc",
//   Neutral = "neutral",
//   Stone = "stone",
//   Red = "red",
//   Orange = "orange",
//   Amber = "amber",
//   Yellow = "yellow",
//   Lime = "lime",
//   Green = "green",
//   Emerald = "emerald",
//   Teal = "teal",
//   Cyan = "cyan",
//   Sky = "sky",
//   Blue = "blue",
//   Violet = "violet",
//   Purple = "purple",
//   Fuchsia = "fuchsia",
//   Pink = "pink",
//   Rose = "rose",
// }

type Props = {
  title: string;
  metric: string;
  color?: Color;
};

function StatCard({title, metric, color}: Props) {
  return <Card decoration="top" decorationColor={color}>
    <Text>{title}</Text>
    <Metric>{metric}</Metric>
  </Card>
}

export default StatCard;
