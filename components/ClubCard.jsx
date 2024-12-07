import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ClubCard({ name, description, imageUrl }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={imageUrl}
          alt={`${name}の活動写真`}
          width={400}
          height={200}
          className="rounded-md object-cover mb-4"
        />
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="#">詳細を見る</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
