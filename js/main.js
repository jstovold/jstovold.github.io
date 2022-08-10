function goto(id, up)
{

  if (up) {
    href = 'html/';
  } else {
    href = '';
  }
  switch (id) {
    case "publications":
      document.location.href = 'https://scholar.google.com/citations?user=gU8ZSYQAAAAJ&hl=en';
      break;
    case "folklore":
      document.location.href = href + '/folklore/index.html'; 
      break;
    case "research":
      document.location.href = href + 'research.htm'; 
      break;
    case "teaching":
      document.location.href = href + 'teaching.htm'; 
      break;
    case "experience":
      document.location.href = href + 'experience.htm'; 
      break;
    case "contact":
      document.location.href = href + 'contact.htm'; 
      break;
    default:
      document.location.href = href + '../index.htm'; 
      break;
  }
}

