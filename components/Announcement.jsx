import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Announcement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>お知らせ</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">現在お知らせはありません。</p>
      </CardContent>
    </Card>
  );
}
