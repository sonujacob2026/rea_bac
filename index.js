const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); 

mongoose.connect(
  "mongodb+srv://sonulittle5:sonu@cluster0.ndla7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => console.log("Connected to MongoDB"))
 .catch(err => console.error("Database connection error:", err));


const itemRoutes = require("./routes/ItemRoutes");

app.use("/itemInserting", itemRoutes);

// Also alias GET /items to the same route file (for clarity)
app.use("/items", itemRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
