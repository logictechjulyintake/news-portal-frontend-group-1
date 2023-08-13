const editor = SUNEDITOR.create((document.getElementById('newsContent')), {
    buttonList : [
        ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
        ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
        ['link', 'image', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print']
    ],
});

function postNews() {
    const title = id("title").value.trim();

    if(title.length === 0 || editor.getText().length === 0) {
        id("postNewsMsg").innerHTML = "All <span style='color:red;'>*</span> fields are required!"
        return;
    }

    if(title.length <= 15) {
        id("postNewsMsg").innerHTML = "Title too short!";
        return;
    }

    if(editor.getText().length <= 100) {
        id("postNewsMsg").innerHTML = "News content too short!";
        return;
    }

    id("postNewsMsg").innerHTML = "Posted!";

}