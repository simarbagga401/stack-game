const mainBlock = document.querySelector('.mainBlock');
const initialBlock = document.querySelector('.initialBlock');
const secondBlock = document.querySelector('.secondBlock');
// var right = -1200
function Move(){
	// secondBlock.style.right = secondBlock.style.right +10 +'px';
	// var speed = 10
	// 	right += speed
	// 	secondBlock.style.right = right + 'px'
		console.log( secondBlock.style.right);
}
function GameFunction(){
	setInterval(()=>{
		Move()
	},500)
}
GameFunction();

document.addEventListener('keydown',(e)=>{
	if(e.key === 'j'){
		secondBlock.classList.add('stop')
	}else if(e.key === 'k'){
		secondBlock.classList.remove('stop')
	}
})