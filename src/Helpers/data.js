export let files = [
	{
		"id": 1,
		"name": "Jorgelina", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"], 
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},
	{
		"id": 2,
		"name": "Ramona", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},
	{
		"id": 3,
		"name": "Kiki", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},
	{
		"id": 4,
		"name": "Petrona", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},
	{
		"id": 5,
		"name": "Bernarda", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},
	{
		"id": 6,
		"name": "Maria Laura", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},	
	{
		"id": 7,
		"name": "Sandra", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},	
	{
		"id": 8,
		"name": "Rosa", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},
	{
		"id": 9,
		"name": "Isadora", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},
	{
		"id": 10,
		"name": "Constanza", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},
	{
		"id": 10,
		"name": "Carmen", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	},
	{
		"id": 11,
		"name": "Gabriela", 
		"date": "", 
		"labels": ["Negro", "Empleada", "DI"],
		"url": "https://drive.google.com/file/d/1AijwHrJQlKww_CEhVmHoOKaoinBTVC-I/view?usp=sharing"
	}
]

let repeatedLabels = [].concat(files[1].labels, files[2].labels, files[3].labels, files[4].labels, files[5].labels, files[6].labels, files[7].labels, files[8].labels, files[9].labels, files[10].labels, files[11].labels);
export let nonRepeatedLabels = repeatedLabels.filter((item, index) => repeatedLabels.indexOf(item) === index);