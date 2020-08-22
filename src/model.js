import image from './assets/image.png'

export const model = [{
		type: 'title',
		value: 'Follow The Evolution Of Web Development',
		options: {
			tag: 'h1',
			styles: `
				font-family: 'JetBrains Mono extra bold';
				background: rgb(238,174,202);
				background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
				padding: 30px 0;
				color: #fff;
				text-align: center;
			`
		}
	},
	{
		type: 'image',
		value: image,
		options: {
			styles: `
				padding: 2rem 0;
				display: flex;
				justify-content: center;
			`,
			alt: 'My Image',
			imageStyles: `
				width: 500px;
				height: auto;
			`
		}
	},
	{
		type: 'textColumns',
		value: [
			'Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
			'Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.',
			'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.'
		],
		options: {
			styles: `
				font-family: 'JetBrains Mono extra bold';
				background: rgb(131,58,180);
				background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
				padding: 30px;
				color: #fff;
			`
		}
	},
	{
		type: 'text',
		value: 'You may only succeed if you desire succeeding; you may only fail if you do not mind failing but which, if you will sit down quietly, may alight upon you.',
		options: {
			tag: 'h6',
			styles: `
				font-family: 'JetBrains Mono extra bold';
				font-weight: extra bold;
				background: rgb(34,193,195);
				background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(60,45,253,1) 100%);
				padding: 40px;
				color: #fff;
				text-align: center;
			`
		}
	},
]