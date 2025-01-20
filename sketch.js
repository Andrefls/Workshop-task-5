let table;
let pen, pencil, marker, paper;

function preload (){
  table = loadTable('csvfiles/elements.csv', 'csv', 'header');
  pen = loadImage ('images/pen.png');
  pencil = loadImage ('images/pencil.png');
  marker = loadImage ('images/marker.png');
  paper = loadImage ('images/paper.png');
}

function setup() {
  createCanvas(1300,1000);
  imageMode (CENTER);
  pixelDensity (1);
}

function MonthLabels (){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let Month = row.get("Month");
    fill (0,0,0);
    text (Month, 80 + x * 100, 900);
  }
}

function ShowPens (){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow (x);
    let countPens = row.get("Pen");
    for (y = 0; y < countPens; y++){
      image (pen, 100 + x * 100, 880 - y * 160,100,30);
    }
    }
  }

  function ShowPencils (){
    for (x = 0; x < table.getRowCount(); x++){
      let row = table.getRow (x);
      let countPencil = row.get("Pencil");
      for (y = 0; y < countPencil; y++){
        image (pencil, 100 + x * 100, 840 - y * 160,100,30);
      }
      }
    }

  function ShowMarkers (){
    for (x = 0; x < table.getRowCount(); x++){
      let row = table.getRow (x);
      let countMarker = row.get("Marker");
      for (y = 0; y < countMarker; y++){
        image (marker, 100 + x * 100, 800 - y * 160,100,30);
      }
      }
    }

    function ShowPapers (){
      for (x = 0; x < table.getRowCount(); x++){
        let row = table.getRow (x);
        let countPaper = row.get("Paper");
        for (y = 0; y < countPaper; y++){
          image (paper, 100 + x * 100, 760 - y * 160,100,30);
        }
        }
      }

function draw() {
  background(255);
  MonthLabels();
  ShowPens ();
  ShowPencils ();
  ShowMarkers ();
  ShowPapers ();
  text ('Number of pens, pencils, and markers used monthly for a year of drawing.', width/2, 950);
}
