
	//Changes main product image according to color selection//

	var img1 = new Image().src = "p22.png";
	var img2 = new Image().src = "sav2.png";
	var img3 = new Image().src = "sav3.png";
	var img4 = new Image().src = "sav4.png";

	function setImage(imageSelect) {
		theImageIndex = imageSelect.options[imageSelect.selectedIndex].value;
		if (document.images)
			document.images[4].src = this.eval("img" + theImageIndex);
	}

	//Changes filling image according to color selection//

	var fill1 = new Image().src = "dd.png";
	var fill2 = new Image().src = "hp.png";
	var fill3 = new Image().src = "mf.png";

	function setFill(imageSelect) {
		theImageIndex = imageSelect.options[imageSelect.selectedIndex].value;
		if (document.images)
			document.images[8].src = this.eval("fill" + theImageIndex);
	}

	//Updates cart by indication number of items//

	var $button = document.selector('.add');
	var $counter = document.selector('.counter');

	$button.addEventListener('click', function(){
	  $counter.value = parseInt($counter.value) + 1;
	}, false);

	//Adjusts product quantity amount with text and + or - buttons//

	function up(max) {
    document.getElementById("quantity").value = parseInt(document.getElementById("quantity").value) + 1;
    if (document.getElementById("quantity").value >= parseInt(max)) {
        document.getElementById("quantity").value = max;
    }
}
	function down(min) {
    document.getElementById("quantity").value = parseInt(document.getElementById("quantity").value) - 1;
    if (document.getElementById("quantity").value <= parseInt(min)) {
        document.getElementById("quantity").value = min;
    }
}

