export const quizData = [
	{
		number: 1,
		title: 'Где планируете провести ремонт?',
		answer_alias: 'building',
		answers: [
			{
				answer_title: 'Новостройка',
				type: 'radio',
			},
			{
				answer_title: 'Вторичка',
				type: 'radio',
			},
			{
				answer_title: 'Частный дом',
				type: 'radio',
			},
			{
				answer_title: 'Коммерческое помещение',
				type: 'radio',
			},
		],
	},
	{
		number: 2,
		title: 'Какое у вас количество комнат?',
		answer_alias: 'quantity',
		answers: [
			{
				answer_title: 'Студия',
				type: 'radio',
			},
			{
				answer_title: 'Одна',
				type: 'radio',
			},
			{
				answer_title: 'Две',
				type: 'radio',
			},
			{
				answer_title: 'Три и больше',
				type: 'radio',
			},
		],
	},
	{
		number: 3,
		title: 'Укажите примерную площадь помещения для ремонта',
		answer_alias: 'area',
		answers: [
			{
				answer_title: 'До 30м<sup>2</sup>',
				type: 'radio',
			},
			{
				answer_title: 'От 30м<sup>2</sup> до 50м<sup>2</sup>',
				type: 'radio',
			},
			{
				answer_title: 'От 50м<sup>2</sup> до 70м<sup>2</sup>',
				type: 'radio',
			},
			{
				answer_title: 'От 70м<sup>2</sup> и больше',
				type: 'radio',
			},
		],
	},
	{
		number: 4,
		title: 'У Вас есть дизайн-проект?',
		answer_alias: 'design',
		answers: [
			{
				answer_title: 'Да',
				type: 'radio',
			},
			{
				answer_title: 'Нет',
				type: 'radio',
			},
			{
				answer_title: 'Нет, но будет нужен',
				type: 'radio',
			},
		],
	},
	{
		number: 5,
		title: 'В какой бюджет хотели бы уложиться?',
		answer_alias: 'budget',
		answers: [
			{
				answer_title: 'До 150 000 рублей',
				type: 'radio',
			},
			{
				answer_title: 'От 150 000 до 200 000 рублей',
				type: 'radio',
			},
			{
				answer_title: 'От 200 000 до 300 000 рублей',
				type: 'radio',
			},
			{
				answer_title: 'От 300 000 до 500 000 рублей',
				type: 'radio',
			},
			{
				answer_title: 'От 500 000 до 1 млн рублей',
				type: 'radio',
			},
			{
				answer_title: 'От 1 млн рублей',
				type: 'radio',
			},
		],
	},
	{
		number: 6,
		title: 'Из какого Вы города',
		answer_alias: 'city',
		answers: [
			{
				answer_title: 'Введите название города',
				type: 'text',
			},
		],
	},
	{
		number: 7,
		title: 'Когда планируете ремонт?',
		answer_alias: 'term',
		answers: [
			{
				answer_title: 'В ближайшие 7 дней',
				type: 'radio',
			},
			{
				answer_title: 'В течение 2 недель',
				type: 'radio',
			},
			{
				answer_title: 'В этом месяце',
				type: 'radio',
			},
			{
				answer_title: 'В ближайшие пол года',
				type: 'radio',
			},
		],
	},
	{
		number: 8,
		title: 'Отлично! Последний шаг для расчёта. Введите номер телефона',
		answer_alias: 'phone',
		answers: [
			{
				answer_title: 'Введите телефон',
				type: 'text',
			},
		],
	},
];
