const fs = require("fs");

const readStreams = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});

const writeStreams = fs.createWriteStream("./docs/blog4.txt");

// readStreams.on("data", (chunks) => {
//   console.log(chunks);
//   writeStreams.write("\n new chunk \n");
//   writeStreams.write(chunks);
// });

readStreams.pipe(writeStreams);
