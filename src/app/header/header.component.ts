import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 @Output() scrollTO: EventEmitter<string>=new EventEmitter()
  scrollTo(identifier:string)
  {
    this.scrollTO.emit(identifier)
  }

  handleClick() {

    const pdfUrl = './assets/Resume-Imad (3).pdf';

    // Create a new anchor element
    const anchor = document.createElement('a');

    anchor.href = pdfUrl;

    // Set the download attribute to suggest a filename for the downloaded file
    anchor.download = 'document.pdf';

    // Trigger a click event on the anchor element
    anchor.click();
  }
}


