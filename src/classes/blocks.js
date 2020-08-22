import {
	row,
	col
} from '../utils'

class Block {
	constructor(value, options) {
		this.value = value
		this.options = options
	}

	toHTML() {
		throw new Error('Method toHTML have to be implemented!')
	}
}

// TITLE BLOCK
export class TitleBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		const {
			tag,
			styles
		} = this.options
		return row(col(`
			<${tag}>${this.value}</${tag}>
		`), styles)
	}
}

// IMAGE BLOCK
export class ImageBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		const {
			alt,
			styles,
			imageStyles
		} = this.options
		const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}"/>`
		return row(html, styles)
	}
}

// TEXT BLOCK
export class TextBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		const {
			tag,
			styles
		} = this.options
		return row(col(`
			<${tag}>${this.value}</${tag}>
		`), styles)
	}
}

// TEXT COLUMNS BLOCK
export class TextColumnsBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		const html = this.value.map(item => col(item))
		return row(html.join(''), this.options.styles)
	}
}