
/*----------------------------------------------
fonction permettant de retourner si element est dans le tableau et son indice.



var tab = [1,3,6, 8,9];
var element = 8;


function check(tab, element){
	 return tab.indexOf(element);
	  
}
	
console.log(check(tab, element));
----------------------------------------------


----------------------------------------------

fonction permettant de retourner si element est dans le tableau et son indice mais dela manière "callback".

var searchElement = function(data, callback){
for (var i = 0; i< data.tableau.length; i++)
if(data.tableau[i]==data.filtre)
return callback(null,i);
return callback('Element ' + data.filtre + ' non retrouve dans tableau');
};

var tab = [1,3,6,8,9];
var element = 5;
var data = {tableau : tab, filtre : element} ;

searchElement(data, function (err,result){
if (err)
console.error("erreur :" + err)
else
console.log(element + " existe a la position " +
result)
});

----------------------------------------------

fonction permettant de retourner la présence et le nombre d'occurences d'une chaine de caractères de la manière "callback".



var str = 'aaabbbbbbababababbbbbaaaab';
var ch = 'ab';
var data = {str : str, ch : ch};

var searchString = function(data, callback){
	var compteur =0;
	for (var i = 0; i<= data.str.length-data.ch.length; i++){
		if(data.str.substr(i, data.ch.length)==data.ch)
			compteur ++;
	}
	if (compteur>0)
		return callback(null, compteur);
	return callback(str + ' n éxiste pas dans la chaine ' + ch);
};



searchString(data, function (err,result){
	if (err)
		console.error("erreur :" + err);
	else
		console.log(ch + ' existe ' + result + ' fois ');
});
----------------------------------------------


//fonction permettant de retourner la présence et le nombre d'occurences d'une chaine de caractères de la manière "callback".

var str = 'aabaabbbabbbaa';
var ch = ['ab', 'ba', 'abba'];
var data = {str : str, ch : ch};

var searchString = function(data, callback){
	var compteur =0;

	for (var i = 0; i< data.ch.length; i++)

		for (var j= 0; j< data.str.length; j++){

			if (data.ch[i] == data.str.substr(j, data.ch[i].length))

			compteur ++;
		}

	
	if (compteur>0)

		return callback(null, compteur);
	return callback(' Aucun element du tableau n est contenu dans la chaine ' + data.str);

};
searchString(data, function (err,result){
	
	if (err)

		console.error('erreur :' + err);
	else
		console.log(ch + ' existe ' + result + ' fois ');
});
----------------------------------------------
*/