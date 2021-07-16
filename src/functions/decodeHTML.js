


export function decodeHTML(html) {
    var data = document.createElement("textarea");
    data.innerHTML = html;
    return data.value;
  };
  