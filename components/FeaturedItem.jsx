import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedItem({
  number,
  image,
  title,
  company,
  time
}) {
  return (
    (<Card
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105" />
          <div
            className="absolute top-0 left-0 bg-blue-600 text-white w-10 h-10 flex items-center justify-center text-lg font-bold">
            {number}
          </div>
        </div>
        <div className="p-4">
          <h3
            className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-600">
            {title}
          </h3>
          <div className="flex items-center text-sm text-gray-500">
            <span>{company}</span>
            <span className="mx-2">•</span>
            <span>{time}</span>
          </div>
        </div>
      </CardContent>
    </Card>)
  );
}

