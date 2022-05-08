const express = require("express");
const app = require("express")();
const PORT = process.env.PORT || 3001;
const notesRoutes = require("./Develop/routes/notesRoutes");

app.use(express.static("./Develop/public"));
app.use(express.json());
app.use("/api", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});
