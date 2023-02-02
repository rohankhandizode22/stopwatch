import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent {
  hrs: any = '0' + 0;
  min: any = '0' + 0;
  sec: any = '0' + 0;
  ms: any = '0' + 0;
  i=1;
  startTimer: any;
  running = false;
  arr:any=[];
  data:any;


  start(): void {
    if (!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.sec++;
        this.sec = this.sec < 10 ? '0' + this.sec : this.sec;

        // if (this.ms === 999) {
        //   this.sec++;
        //   this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
        //   this.ms = '0' + 0;
        // }


        if (this.sec === 59) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }

        if (this.min === 59) {
          this.hrs++;
          this.hrs = this.hrs < 10 ? '0' + this.hrs : this.hrs;
          this.min = '0' + 0;
        }
      },1000);
    } else {
      this.stop();
    }
  }
  stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  reset(): void {
    clearInterval(this.startTimer);
    this.running = false;
    this.hrs = this.min = this.sec = this.ms= '0' + 0;
  }

  lap(hrs:any,min:any,sec:any): void{
    // console.log(hrs,min,sec);
    this.data=hrs+":"+min+":"+sec
    this.arr.push(this.data)
    console.log(this.arr);
    this.i++;
    
    // let sec1=this.sec
    
    // this.running=false;
    // this.hrs=
    // this.min=this.min++;
    // this.sec=this.sec++;
  }
  
}
