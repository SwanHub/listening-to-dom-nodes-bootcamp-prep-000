function bubble(e) {
    e.stopPropagation();
    console.log(this.firstChild.nodeValue.trim() + ' bubbled');}

