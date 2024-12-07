# 作業ディレクトリを設定
$basePath = "C:\Users\tyoko\OneDrive\デスクトップ\penrry-uni"

# フォルダ構造を定義
$folders = @(
    "components",
    "pages",
    "pages/api",
    "styles/components",
    "public"
)

# 必要なファイルとその内容を定義
$files = @{
    "components/AnnouncementBox.js" = "// Announcement Box Component";
    "components/SearchBar.js" = "// Search Bar Component";
    "components/Card.js" = "// Card Component for displaying club/circle info";
    "pages/index.js" = "// Main page with club/circle listing and search functionality";
    "pages/submit.js" = "// Submission page for adding new clubs/circles";
    "pages/api/posts.js" = "// API route for handling posts data";
    "styles/globals.css" = "/* Global styles */";
    "vercel.json" = "{ 'rewrites': [] }" -replace "'", '"'; # JSON文字列をエスケープなしで記述
}

# フォルダを作成
foreach ($folder in $folders) {
    $fullPath = Join-Path $basePath $folder
    if (!(Test-Path $fullPath)) {
        New-Item -Path $fullPath -ItemType Directory
        Write-Host "Created folder: $fullPath"
    } else {
        Write-Host "Folder already exists: $fullPath"
    }
}

# ファイルを作成
foreach ($file in $files.Keys) {
    $fullPath = Join-Path $basePath $file
    $content = $files[$file]
    if (!(Test-Path $fullPath)) {
        New-Item -Path $fullPath -ItemType File -Force | Out-Null
        Set-Content -Path $fullPath -Value $content
        Write-Host "Created file: $fullPath"
    } else {
        Write-Host "File already exists: $fullPath"
    }
}

Write-Host "Project structure successfully created in $basePath"
