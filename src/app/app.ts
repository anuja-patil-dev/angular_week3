import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Databinding } from './components/databinding/databinding';
import { MemberList } from './components/member-list/member-list';



@Component({
  imports: [Header,Databinding,MemberList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-week3');
}
