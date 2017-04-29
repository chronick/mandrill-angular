// Detects whether input form="form_id" is available on the platform
// E.g. IE 10 (and below), don't support this
Modernizr.addTest("formattribute", () => {
    var form = document.createElement("form");
    var input = document.createElement("input");
    var div = document.createElement("div");
    var id = "formtest"+(new Date().getTime());
    var attr;
    var bool = false;

    form.id = id;

    //IE6/7 confuses the form idl attribute and the form content attribute
    if(document.createAttribute){
		attr = document.createAttribute("form");
		attr.nodeValue = id;
		input.setAttributeNode(attr);
		div.appendChild(form);
		div.appendChild(input);

		document.documentElement.appendChild(div);

		bool = form.elements.length === 1 && input.form == form;

		div.parentNode.removeChild(div);
	}

    return bool;
});