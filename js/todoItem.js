function TodoItem(text, email){
	this.text = text;
	this.isDone = false;
	this.isImportant = false;
	this.email = email;
}

module.exports = TodoItem;
