(function(){
const $ = el=> document.querySelector(el);
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
	price = [3500,4000];
	console.log(d,h,t,price)
	$('#price_first').nextElementSibling.innerHTML = "For the First " + t + " Year"
	if(t>1) $('#price_first').nextElementSibling.innerHTML += "s"
	if(d === "com"){
		if(h === "a") {
			t === 1 ? price = [4000,4700] : price = [6400,7900]
		}else if(h === "b"){
			t === 1 ? price = [6000,7400] : price = [9700,12000]
		}else{
			t === 1 ? price = [7000,9800] : price = [12000,18000]
		}
	}
	else if(d === "in"){
		if(h === "a") {
			t === 1 ? price = [4000,4250] : price = [5900,7050]
		}else if(h === "b"){
			t === 1 ? price = [6000,6950] : price = [8800,11150]
		}else{
			t === 1 ? price = [7000,8750] : price = [11500,17150]
		}
	}
	$('#price_first').innerHTML = "RS " + price[0] + '/='
	$('#price_second b').innerHTML = "RS " +price[1] + '/='
	$('form input[name="domain"]').value = d;
	$('form input[name="hosting"]').value = h;
	$('form input[name="term"]').value = t;
}
price()
$('#complete_btn').addEventListener('click',function(){
	$('form').submit()
})
document.querySelectorAll('select').forEach(s=>{
	s.addEventListener('input',()=>{price()})
})})()