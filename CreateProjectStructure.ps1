# ��ƃf�B���N�g����ݒ�
$basePath = "C:\Users\tyoko\OneDrive\�f�X�N�g�b�v\penrry-uni"

# �t�H���_�\�����`
$folders = @(
    "components",
    "pages",
    "pages/api",
    "styles/components",
    "public"
)

# �K�v�ȃt�@�C���Ƃ��̓��e���`
$files = @{
    "components/AnnouncementBox.js" = "// Announcement Box Component";
    "components/SearchBar.js" = "// Search Bar Component";
    "components/Card.js" = "// Card Component for displaying club/circle info";
    "pages/index.js" = "// Main page with club/circle listing and search functionality";
    "pages/submit.js" = "// Submission page for adding new clubs/circles";
    "pages/api/posts.js" = "// API route for handling posts data";
    "styles/globals.css" = "/* Global styles */";
    "vercel.json" = "{ 'rewrites': [] }" -replace "'", '"'; # JSON��������G�X�P�[�v�Ȃ��ŋL�q
}

# �t�H���_���쐬
foreach ($folder in $folders) {
    $fullPath = Join-Path $basePath $folder
    if (!(Test-Path $fullPath)) {
        New-Item -Path $fullPath -ItemType Directory
        Write-Host "Created folder: $fullPath"
    } else {
        Write-Host "Folder already exists: $fullPath"
    }
}

# �t�@�C�����쐬
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
