(function(){
const $ = el=> document.querySelector(el);
const $$ = el=> document.querySelectorAll(el);
const plans = {
	a: ['512 MB RAM',
		'30 GB Storage',
		'One Database',
		'Unlimited Bandwidth'],
	b: ['Standard Performance',
		'Unlimited Storage',
		'10 Databases',
		'Unlimited Bandwidth'],
	c: ['Standard Performance',
		'Unlimited Storage',
		'25 Databases',
		'Unlimited Bandwidth']
}
function changePlan(){
	let v = $('select#host').value;
	if(plans[v]){
		$('#benefits').innerHTML = '<li class="mt5">One Website</li><li class="mt5">One Domain</li>'
		let b = plans[v]
		for(let i =0; i <b.length; i++){
			var li = document.createElement('li')
			li.innerHTML = b[i]
			li.classList = "mt5"
			$('#benefits').appendChild(li)
		}
		$('#benefits').innerHTML += '<li class="mt5">Admin Area to Control your Site</li>'
	}
}
changePlan()
$('select#host').addEventListener('input',changePlan)
function price(){
	let d = $('#domain').value, 
	h = $('#host').value, 
	t = parseInt($('#term').value),
	price = [3500,4000],hp = '2048';
	$('#price_first').nextElementSibling.innerHTML = "For the First " + t + " Year"
	$('#price_first').nextElementSibling.nextElementSibling.innerHTML = "Then <b></b> Per "+t+" Year"
	$('#d1').innerHTML = `Rs ${d === "com" ? '500' : '500'}`
	$('#d2').innerHTML = `Rs ${d === "com" ? '1050' : '599'}`
	if(h === "a")     { hp = "2050"; hp2 = "2130" }
	else if(h === "b"){	hp = "3950"; hp2 = "4800" }
	else              { hp = "5030"; hp2 = "7200"}
	$('#h1').innerHTML = `Rs ${hp}`
	$('#h2').innerHTML = `Rs ${hp2}`
	if(t>1) {
		$('#price_first').nextElementSibling.innerHTML += "s"
		$('#price_first').nextElementSibling.nextElementSibling.innerHTML += "s"
	}
	if(d === "com"){
		if(h === "a") {
			t === 1 ? price = [4000,4700,470] : price = [6400,7900,900]
		}else if(h === "b"){
			t === 1 ? price = [6000,7400,716] : price = [9700,12000,1504]
		}else{
			t === 1 ? price = [7000,9800,1010] : price = [12000,18000,1893]
		}
	}
	else if(d === "in"){
		if(h === "a") {
			t === 1 ? price = [4000,4250,455] : price = [5900,7050,778]
		}else if(h === "b"){
			t === 1 ? price = [6000,6950,801] : price = [8800,11150,1382]
		}else{
			t === 1 ? price = [7000,8750,995] : price = [11500,17150,1771]
		}
	}
	$('#price_first').innerHTML = "RS " + price[0] + '/='
	$('#price_second b').innerHTML = "RS " +price[1] + '/='
	$('#tax b').innerHTML = "RS " +price[2] + '/='
	$('form input[name="domain"]').value = d;
	$('form input[name="hosting"]').value = h;
	$('form input[name="term"]').value = t;
}
price()
function cancel(){
	$('.form').classList.remove('active')
	$$('.form input').forEach(i=>i.value = "")
}
$('#complete_btn').addEventListener('click',function(){
	$('.form').classList.toggle('active')
})
$('.form').addEventListener('click',function(e){
	if(e.target.classList == "form active"){
		cancel()
	}
})
$('.form #c').addEventListener('click',cancel)
document.querySelectorAll('select').forEach(s=>{
	s.addEventListener('input',()=>{price()})
})})()
