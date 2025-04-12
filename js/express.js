const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/artifacts", async (req, res) => {
  const artifacts = await prisma.artifact.findMany({
    include: { metadata: true },
  });
  res.json(artifacts);
});

app.listen(3000, () => console.log("Server running"));