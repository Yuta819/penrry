import { ColorfulPanel } from './ColorfulPanel'

const worksData = [
  { id: 1, title: "全国学生プログラミングコンテスト優勝", category: "テクノロジー", image: "/placeholder.svg?height=600&width=600&text=Programming", color: "#FF6B6B" },
  { id: 2, title: "国際ロボット競技大会出場", category: "工学", image: "/placeholder.svg?height=600&width=600&text=Robotics", color: "#4ECDC4" },
  { id: 3, title: "学生起業家ビジネスプランコンペ最優秀賞", category: "ビジネス", image: "/placeholder.svg?height=600&width=600&text=Business", color: "#45B7D1" },
  { id: 4, title: "全日本大学駅伝 準優勝", category: "スポーツ", image: "/placeholder.svg?height=600&width=600&text=Athletics", color: "#FFA07A" },
  { id: 5, title: "国際学生映画祭 グランプリ受賞", category: "芸術", image: "/placeholder.svg?height=600&width=600&text=Film", color: "#98D8C8" },
  { id: 6, title: "学生ボランティア活動功労賞", category: "社会貢献", image: "/placeholder.svg?height=600&width=600&text=Volunteer", color: "#F06292" },
  { id: 7, title: "国際学生科学論文コンテスト入賞", category: "研究", image: "/placeholder.svg?height=600&width=600&text=Science", color: "#AED581" },
  { id: 8, title: "全国学生音楽コンクール金賞", category: "音楽", image: "/placeholder.svg?height=600&width=600&text=Music", color: "#FFD54F" },
  { id: 9, title: "学生環境活動プロジェクト表彰", category: "環境", image: "/placeholder.svg?height=600&width=600&text=Environment", color: "#4DB6AC" },
  { id: 10, title: "国際学生デザインビエンナーレ特別賞", category: "デザイン", image: "/placeholder.svg?height=600&width=600&text=Design", color: "#BA68C8" }
]

export function WorksSection() {
  return (
    (<section className="bg-black py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">学生たちの輝かしい成果</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work) => (
            <ColorfulPanel key={work.id} {...work} />
          ))}
        </div>
      </div>
    </section>)
  );
}

