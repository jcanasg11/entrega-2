var vec=["maradona","fede"];
console.log(vec);



var ingresar=function()
{
	var nombre=document.getElementById("nombre").value;
	vec.push(nombre);
	console.log(vec);
	document.getElementById("nombre").value="";
}


var julian=function()
{
	var i=0;
	var nom=document.getElementById("nom").value;
	var u=vec.length-1; 
	while(i<vec.length)
	{
		if(nom==vec[i])
		{
			var k=vec[u];
			vec[u]=vec[i];
			vec[i]=k;
			vec.pop();
			console.log(vec);
			i=vec.length;
			document.getElementById("nom").value="";
		}
		else
		{
			i=i+1;
			if (nom!=vec[i])
			{
				alert('no esta en el momento');
			}
		}
	}
}