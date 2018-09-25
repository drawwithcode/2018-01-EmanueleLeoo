function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
  background(235, 215, 203);
}

function draw() {

	strokeWeight(4);
  stroke(16, 15, 16);
  //Antenna1
	line(240, 143, 250, 200);
	ellipse(240, 143, 8, 8);

	//Arm2



	noStroke();

  fill(16, 15, 16);
	//Nek
	rect(235, 255, 31, 70);
	//Wheel
	ellipse(250, 465, 70, 70);
	fill(153, 178, 191);
	ellipse(250, 465, 45, 45);
	//ScheletroCollo
	rect(235, 306, 14, 4);
	rect(235, 296, 11, 4);
	rect(235, 286, 8, 4);


	fill(16, 15, 16);
	//Naso
	ellipse(295, 245, 30, 8);

	fill(0, 110, 160);
  //Body
	rect(198, 315, 105, 150);
	fill(153, 178, 191);
	rect(198, 435, 105, 10);

	fill(0, 110, 160);
	//Head
	rect(210, 200, 82, 80);
	fill(153, 178, 191);
  ellipse(220, 270, 8, 8);
	ellipse(220, 210, 8, 8);

	//Eye
	ellipse(290, 220, 20, 25);
  fill(25, 17, 74);
	ellipse(293, 220, 10, 10);
	//Bocca
	fill(153, 178, 191);
	rect(260, 258, 40, 15);
	strokeWeight(2);
	stroke(25, 17, 74);
	line(266, 259, 266, 268);
	line(272, 259, 272, 268);
	line(278, 259, 278, 268);
	line(284, 259, 284, 268);
	line(290, 259, 290, 268);
	line(296, 259, 296, 268);

	strokeWeight(4);
  stroke(16, 15, 16);
	//Antenna2
  line(215, 150, 250, 230);
	ellipse(215, 150, 8, 8);

	strokeWeight(5);
	//Arm2
	fill(250, 205, 52);
	rect(240, 340, 27, 27);
	rect(240+27, 350, 27, 27);
	rect(240+27+27, 355, 27, 27);
	rect(240+27+27+27, 362, 27, 27);
	rect(240+27+27+27+27, 357, 27, 27);
}
