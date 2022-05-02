function addSlots(picker, dates, times) {
	dates.forEach((i, idx) => {
		let col = document.createElement("div");
		col.classList.add("picker-col");
		let header = document.createElement("div");
		header.classList.add("picker-header")
		header.innerHTML = "<p>" + i + "</p>";
		col.appendChild(header);
		times.forEach((j, jdx) => {
			let box = document.createElement("div");
			box.classList.add("picker-box");
			box.addEventListener("mousedown", selectFromHere);
			box.addEventListener("mouseover", selectToHere);
			box.id = `{idx}-{jdx}`;
			col.appendChild(box);
		}
		picker.appendChild(col);
		picker.classList.add("picker");

	}
}

function selectFromHere(evt) {
	event.target.id 

window.addEventListener('load', () => {
	let picker = document.getElementById("avaibilityPicker");
	addSlots(picker, ["Lun.<br>10 déc.", "Lun.<br>10 déc.", "Lun.<br>10 déc.", "Lun.<br>10 déc.", "Lun.<br>10 déc."], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] );
	 * onmousedown="SelectFromHere(event);" onmouseover="SelectToHere(event);" ontouchstart="SelectFromHereByTouch(event);" ontouchmove="SelectToHereByTouch(event);" ontouchend="SelectStopByTouch(event);" 
	 * */
});
