
treeData = [{
  "name": "ამბროსი უნცროსი",
  "class": "man",
  "extra": {
      	"nickname": "შუბა"
      },
  "textClass": "emphasis",
  "marriages": [{
    "spouse": {
      "name": "დიჟნა II",
      "class": "woman",
      "extra": {
      	"nickname": "დიდებული"
      }
    },
    "children": [{
      "name": "nodari",
      "class": "man",
      "marriages": [{
        "spouse": {
          "name": "nino",
          "class": "woman"
        },
        "children": [{
          "name": "ნარი",
          "class": "woman",
          "marriages": [{
            "spouse": {
              "name": "akaki",
              "class": "man"
            }
          }]
        }, {
          "name": "გიორგი",
          "class": "man"
        }, {
          "name": "დავითი",
          "class": "man"
        }]
      }]
    }]
  }]
}]



dTree.init(treeData, {
  target: "#graph",
  debug: true,
  height: 800,
  width: 1200,
  callbacks: {
    nodeClick: function(name, extra) {
      console.log(name);
    },
    textRenderer: function(name, extra, textClass) {
    	if (extra && extra.nickname)
      	name = name + " (" + extra.nickname + ")";
    	return "<p align='center' class='" + textClass + "'>" + name + "</p>";
    }
  }
});
