var express = require("express");
var app = express();
var cors = require("cors");
const fs = require("fs").promises;

app.use(cors());

app.get("/images", async function(req, res) {
  try {
    const images = await fs.readFile(`${__dirname}/data/images.json`);
    const parsedImages = JSON.parse(images);
    if (!req.query || !req.query.page || req.query.page === 1) {
      res.json(parsedImages);
    } else {
      res.json(paginate(req, parsedImages));
    }
  } catch (e) {
    console.log(e);
    res.end();
  }
});

app.post("/images/:uri/like", async function(req, res) {
  try {
    const images = await fs.readFile(`${__dirname}/data/images.json`);
    const parsedImages = JSON.parse(images);
    parsedImages.data.forEach((elem, index) => {
      if (elem.id.toString() === req.params.uri.split("-")[0]) {
        parsedImages.data[index].liked = ! parsedImages.data[index].liked;
        if(parsedImages.data[index].liked) {
          parsedImages.data[index].likes_count = elem.likes_count + 1;
        } else {
          parsedImages.data[index].likes_count = elem.likes_count - 1;
        }
      }
    });
    await fs.writeFile(
      `${__dirname}/data/images.json`,
      JSON.stringify(parsedImages)
    );
    res.json(parsedImages);
  } catch (e) {
    console.log(e);
  }
});

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});

function paginate(req, parsedImages) {
  let i = (Number(req.query.page) - 1) * 10;

  changeData(parsedImages.data, i);

  changePagination(parsedImages.pagination, req.query.page);

  return parsedImages;
}

function changeData(data, i) {
  data.forEach(image => {
    i = i + 1;
    let postUrl = image.links[1].uri.split("/");
    const newPostUrl = postUrl[postUrl.length - 2].replace(
      image.id.toString(),
      i.toString()
    );
    postUrl.splice(postUrl.length - 2, 1, newPostUrl);
    image.id = i;
    image.links[1].uri = postUrl.join("/");
  });
}

function changePagination(pagination, currentPage) {
  if (!currentPage || currentPage === "1") {
    pagination.previous = null;
  } else {
    pagination.previous = pagination.next.replace("2", Number(currentPage) - 1);
  }
  pagination.next = pagination.next.replace("2", Number(currentPage) + 1);
}
