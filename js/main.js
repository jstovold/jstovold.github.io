function updateMain(id)
{
  if (id == 'publications') {
    document.location.href = 'https://scholar.google.com/citations?user=gU8ZSYQAAAAJ&hl=en';
  } else {
    if (id == 'folklore') {
      document.location.href = 'https://www-users.cs.york.ac.uk/~jstovold/html/folklore/index.html'; 
    } else {
      var target = document.getElementById('div_mainpane');
      send_ajax('updateContent', [ id ], target); 
  }
  }
}


function send_ajax(name, args, id)
{
  if (window.XMLHttpRequest)
    xmlhttp = new XMLHttpRequest();
  else 
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange = function()
  {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
      id.innerHTML = xmlhttp.responseText;     
  }
  var link;
  link = "php/function_call.php?name=" + name + "&";
  if (args.length <= 1)
    link += args.length == 0? "args[]=" : "args[]=" + args[0];
  else
  {
    for (var i = 0; i < args.length; i++)
    {
      link += "args[]=" + args[i];
      link += i==args.length -1 ? "" : "&";
    }
  }

  xmlhttp.open("GET",link, false);
  xmlhttp.send();
}
