import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButton } from 'my-UIcomponent-library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'testing';
}
