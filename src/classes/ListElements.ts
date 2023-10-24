import { HasFormatter } from '../interfaces/HasFormatter.js';

export class ListElement {
  constructor(private container: HTMLUnknownElement) {}

  render(item: HasFormatter, heading: string, position: 'start' | 'end'): void {
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.innerText = heading;

    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if (position === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
