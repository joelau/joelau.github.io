function post_process(data) {
		
	// internal links
	data = data.replace(/\[\[(\w+|\-)\]\]/g,"<a href=https://joelau.github.io/page.htm?p=$1>$1</a>");

	// strikethrough font
	data = data.replace(/~~(\w+)~~/g,"<strike>$1</strike>");	

	//doi:
	data = data.replace(/doi:((\w|\/|[-._;():A-Z0-9])+)/gi,'<a href=http://hdl.handle.net/$1>doi:$1</a>');
		
	//hkulib:
	data = data.replace(/hkulib:(\w+)/gi,'<a href=http://library.hku.hk/record=$1>hkulib:$1</a>');

	return data;
	
}