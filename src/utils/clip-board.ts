export default async function addToClipBoard(text: string): Promise<'success' | 'failed'> {
  try {
    await navigator.clipboard.writeText(text)
    return 'success'
  } catch (err) {
    return setClipboardText(text)
  }
}

function setClipboardText(text: string): 'success' | 'failed' {
  const id = "my-custom-clipboard-textarea-hidden-id";
  let existsTextarea: HTMLTextAreaElement | null = document.getElementById(id) as HTMLTextAreaElement;

  if (existsTextarea){
    console.log("The textarea already exists :3")
    existsTextarea.value = text;
    existsTextarea.select();
   
  } else {
    createTextArea(id, text)
  }

  try {
      const status = document.execCommand('copy');
      if (!status) {
          console.error("Cannot copy text");
          return 'failed'
      } else {
          console.log("The text is now on the clipboard");
          return 'success'
      }
  } catch (err) {
      console.error('Unable to copy.');
      return 'failed'
  }
}

function createTextArea(id: string, text: string) {
  console.log("Creating textarea");
  const textarea: HTMLTextAreaElement = document.createElement("textarea");
  textarea.id = id;

  // Place in top-left corner of screen regardless of scroll position.
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textarea.style.width = '1px';
  textarea.style.height = '1px';

  // We don't need padding, reducing the size if it does flash render.
  textarea.style.padding = '0';

  // Clean up any borders.
  textarea.style.border = 'none';
  textarea.style.outline = 'none';
  textarea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textarea.style.background = 'transparent';
  
  document.querySelector("body")?.appendChild(textarea);
  console.log("The textarea now exists :)");
  
  //adding text to textarea
  textarea.value = text;
  textarea.select();
}