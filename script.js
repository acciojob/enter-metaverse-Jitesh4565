//your JS code here. If required.
function enter()
	{
		let para=document.getElementById('status');
		let h1=document.createElement('h1');
		let btn=document.getElementById('enterBtn');
		h1.innerText='Entered Metaverse';
		para.remove();
	    btn.parentNode.insertBefore(h1, btn);
     
	   
	}
