-- CreateTable
CREATE TABLE "sports" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "paralympic" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "athletes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sportId" INTEGER NOT NULL,
    "paralympic" BOOLEAN NOT NULL,
    "instagramUrl" TEXT,
    "instagramName" TEXT,
    "instagramImageUrl" TEXT,
    "instagramFollowersCount" INTEGER,
    "instagramFollowingCount" INTEGER,
    "instagramPostsCount" INTEGER,
    "instagramBio" TEXT,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "athletes_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "sports" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "sports_code_key" ON "sports"("code");

-- CreateIndex
CREATE UNIQUE INDEX "sports_name_key" ON "sports"("name");
