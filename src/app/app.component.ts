import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'TypeScript1';

  // ngOnInit(): void {
    
  //   this.example();
  }
  
 function example() {
    var variable1 = 'Hello';
    let variable2 = 'World';
    const variable3 = 'Welcome';
    let variable4 = 'Jhon';
    
    if(true) {
      var variable1 = 'Goodbye';
      let variable2 = 'Universe';
      let variable4 = 'Doe';
      const variable3 = 'Hello';

      
      console.log('1', variable1)
      console.log('2', variable2)
      console.log('3', variable3)
      console.log('4', variable4)
    }
    
    console.log('5', variable1)
    console.log('6', variable2)
    console.log('7', variable3)
    console.log('8', variable4)
  }
// }

  example();
