import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Sidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">統計情報</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">月間PV数</span>
              <span className="font-bold">35,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">登録団体数</span>
              <span className="font-bold">1,200+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">更新率</span>
              <span className="font-bold">59%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
