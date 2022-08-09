<?php

function updateContent($id)
{
  $return_str = "";
  switch ($id)
  {
    case "home":
      $return_str = file_get_contents("../html/home.htm");
      break;
    case "research":
      $return_str = file_get_contents("../html/research.htm");
      break;
    case "publications":
      $return_str = file_get_contents("../html/publications.htm");
      break;
    case "teaching":
      $return_str = file_get_contents("../html/teaching.htm");
      break;
    case "experience":
      $return_str = file_get_contents("../html/experience.htm");
      break;
    case "contact":
      $return_str = file_get_contents("../html/contact.htm");
      break;
    default:
      $return_str = "Error: 404" . $id;
      break;
  }

  return $return_str;
  
}


?>
